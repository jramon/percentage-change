var module = (function (module) {
	/**
	*	Combines the provided data into hour intervals
	*/
	var createIntervals = function () {
		var intervals = [];

		//create a 24hrs array of objects in the desired format
		for (var i = 0; i < 24; i++) {
			intervals.push({ hour: i, high: 0, low: 0, open: 0, close: 0, volume: 0, count: 0, added: 0 });
		}

		// return combined data by hour
		intervals = module.data.reduce(function (memo, current, intervals) {

			var hour = new Date(current.TIMESTAMP).getHours();

			//I could do a for in loop instead here but I think this is faster (?)
			memo[hour].high += current["HIGH"] || memo[hour].high;
			memo[hour].low += current["LOW"] || memo[hour].low;
			memo[hour].open += current["OPEN"] || memo[hour].open;
			memo[hour].close += current["CLOSE"] || memo[hour].close;
			memo[hour].volume += current["VOLUME"] || memo[hour].volume;

			memo[hour].added++;

			return memo;

		}, intervals);

		//remove hour intervals where no data was found by checking the added counter
		intervals = intervals.filter(function (interval, index, intervals) {
			return interval.added > 0;
		});

		return intervals;
	};

	/**
		Calculates average of hour interval and the % change for each interval

		Note: I'm assuming that to conflate in hours intervals means to
		calculate the average for all of the data we've seen, otherwise
		I'd just work with the totals
	*/
	var processIntervals = function () {
		var intervals = createIntervals();

		//calc average of each property in every hour
		intervals = intervals.map(function (interval, key, intervals) {

			//this is the number of ocurrences we added in the previous step
			var added = interval.added;
			delete interval.added; //we won't need it anyore

			//calculate average for each property in the current hour interval
			for (prop in interval) {
				if (prop != "hour") { //don't do this for the "hour" property
					interval[prop] = interval[prop] / added;
				}
			}

			//Finally, we need to calc % change from open to close for each hour [Should I move this to another function?]
			interval.change = ((interval.close - interval.open)/interval.open) * 100

			return interval;
		});

		return intervals;
	};

	module.boostrap = function () {
		var data = processIntervals();
		//TODO build the ui based on this data
	};

	return module;

}(module || {}));


module.boostrap();
