var module = (function (module) {

  var data = [
    {
        "HIGH": 170.88,
        "LOW": 170.88,
        "OPEN": 170.88,
        "CLOSE": 170.88,
        "VOLUME": 120,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:11:00.000"
    },
    {
        "HIGH": 170.94,
        "LOW": 170.92,
        "OPEN": 170.94,
        "CLOSE": 170.92,
        "VOLUME": 767,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T11:13:00.000"
    },  
    {
        "HIGH": 171.01,
        "LOW": 170.95,
        "OPEN": 170.95,
        "CLOSE": 170.96,
        "VOLUME": 980,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-28T11:14:00.000"
    },
    {
        "HIGH": 171.01,
        "LOW": 170.96,
        "OPEN": 170.96,
        "CLOSE": 171.01,
        "VOLUME": 500,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T11:16:00.000"
    },
    {
        "HIGH": 171.22,
        "LOW": 171.22,
        "OPEN": 171.22,
        "CLOSE": 171.22,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:18:00.000"
    },
    {
        "HIGH": 171.16,
        "LOW": 171.13,
        "OPEN": 171.13,
        "CLOSE": 171.16,
        "VOLUME": 451,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T11:22:00.000"
    },
    {
        "HIGH": 171.16,
        "LOW": 171.16,
        "OPEN": 171.16,
        "CLOSE": 171.16,
        "VOLUME": 179,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:25:00.000"
    },
    {
        "HIGH": 171.19,
        "LOW": 171.19,
        "OPEN": 171.19,
        "CLOSE": 171.19,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:26:00.000"
    },
    {
        "VOLUME": 11,
        "TIMESTAMP": "2015-05-28T11:27:00.000"
    },
    {
        "HIGH": 171.1,
        "LOW": 171.1,
        "OPEN": 171.1,
        "CLOSE": 171.1,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:28:00.000"
    },
    {
        "VOLUME": 17,
        "TIMESTAMP": "2015-05-28T11:29:00.000"
    },
    {
        "HIGH": 171.11,
        "LOW": 171.1,
        "OPEN": 171.1,
        "CLOSE": 171.11,
        "VOLUME": 347,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:30:00.000"
    },
    {
        "HIGH": 171.12,
        "LOW": 171.11,
        "OPEN": 171.11,
        "CLOSE": 171.12,
        "VOLUME": 201,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:31:00.000"
    },
    {
        "VOLUME": 100,
        "TIMESTAMP": "2015-05-28T11:33:00.000"
    },
    {
        "HIGH": 171.21,
        "LOW": 171.2,
        "OPEN": 171.2,
        "CLOSE": 171.21,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T11:35:00.000"
    },
    {
        "HIGH": 171.2,
        "LOW": 171.2,
        "OPEN": 171.2,
        "CLOSE": 171.2,
        "VOLUME": 308,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:36:00.000"
    },
    {
        "HIGH": 171.36,
        "LOW": 171.22,
        "OPEN": 171.22,
        "CLOSE": 171.36,
        "VOLUME": 630,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T11:37:00.000"
    },
    {
        "HIGH": 171.18,
        "LOW": 171.17,
        "OPEN": 171.18,
        "CLOSE": 171.17,
        "VOLUME": 300,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:38:00.000"
    },
    {
        "HIGH": 171.04,
        "LOW": 171.04,
        "OPEN": 171.04,
        "CLOSE": 171.04,
        "VOLUME": 101,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:39:00.000"
    },
    {
        "HIGH": 171.16,
        "LOW": 171.08,
        "OPEN": 171.08,
        "CLOSE": 171.16,
        "VOLUME": 500,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T11:40:00.000"
    },
    {
        "HIGH": 171.12,
        "LOW": 171.09,
        "OPEN": 171.12,
        "CLOSE": 171.09,
        "VOLUME": 330,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:41:00.000"
    },
    {
        "HIGH": 171.1,
        "LOW": 171.06,
        "OPEN": 171.09,
        "CLOSE": 171.1,
        "VOLUME": 804,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T11:42:00.000"
    },
    {
        "VOLUME": 74,
        "TIMESTAMP": "2015-05-28T11:43:00.000"
    },
    {
        "VOLUME": 1,
        "TIMESTAMP": "2015-05-28T11:46:00.000"
    },
    {
        "HIGH": 171,
        "LOW": 171,
        "OPEN": 171,
        "CLOSE": 171,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:47:00.000"
    },
    {
        "VOLUME": 363,
        "TIMESTAMP": "2015-05-28T11:48:00.000"
    },
    {
        "HIGH": 170.75,
        "LOW": 170.75,
        "OPEN": 170.75,
        "CLOSE": 170.75,
        "VOLUME": 392,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:49:00.000"
    },
    {
        "HIGH": 170.75,
        "LOW": 170.74,
        "OPEN": 170.74,
        "CLOSE": 170.75,
        "VOLUME": 279,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:50:00.000"
    },
    {
        "HIGH": 170.74,
        "LOW": 170.73,
        "OPEN": 170.74,
        "CLOSE": 170.73,
        "VOLUME": 202,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:51:00.000"
    },
    {
        "HIGH": 170.73,
        "LOW": 170.67,
        "OPEN": 170.67,
        "CLOSE": 170.73,
        "VOLUME": 1010,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T11:52:00.000"
    },
    {
        "HIGH": 170.67,
        "LOW": 170.66,
        "OPEN": 170.67,
        "CLOSE": 170.66,
        "VOLUME": 300,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:53:00.000"
    },
    {
        "HIGH": 170.68,
        "LOW": 170.68,
        "OPEN": 170.68,
        "CLOSE": 170.68,
        "VOLUME": 300,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:54:00.000"
    },
    {
        "HIGH": 170.78,
        "LOW": 170.78,
        "OPEN": 170.78,
        "CLOSE": 170.78,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:56:00.000"
    },
    {
        "HIGH": 170.78,
        "LOW": 170.77,
        "OPEN": 170.77,
        "CLOSE": 170.78,
        "VOLUME": 238,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:57:00.000"
    },
    {
        "HIGH": 170.77,
        "LOW": 170.77,
        "OPEN": 170.77,
        "CLOSE": 170.77,
        "VOLUME": 205,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T11:58:00.000"
    },
    {
        "HIGH": 170.8,
        "LOW": 170.79,
        "OPEN": 170.79,
        "CLOSE": 170.8,
        "VOLUME": 265,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T11:59:00.000"
    },
    {
        "HIGH": 170.83,
        "LOW": 170.75,
        "OPEN": 170.83,
        "CLOSE": 170.75,
        "VOLUME": 400,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T12:01:00.000"
    },
    {
        "HIGH": 170.75,
        "LOW": 170.71,
        "OPEN": 170.75,
        "CLOSE": 170.71,
        "VOLUME": 400,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T12:02:00.000"
    },
    {
        "HIGH": 170.78,
        "LOW": 170.78,
        "OPEN": 170.78,
        "CLOSE": 170.78,
        "VOLUME": 102,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:04:00.000"
    },
    {
        "HIGH": 170.84,
        "LOW": 170.84,
        "OPEN": 170.84,
        "CLOSE": 170.84,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:05:00.000"
    },
    {
        "HIGH": 170.83,
        "LOW": 170.83,
        "OPEN": 170.83,
        "CLOSE": 170.83,
        "VOLUME": 112,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:06:00.000"
    },
    {
        "HIGH": 170.8,
        "LOW": 170.8,
        "OPEN": 170.8,
        "CLOSE": 170.8,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:09:00.000"
    },
    {
        "VOLUME": 120,
        "TIMESTAMP": "2015-05-28T12:13:00.000"
    },
    {
        "HIGH": 170.85,
        "LOW": 170.85,
        "OPEN": 170.85,
        "CLOSE": 170.85,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:15:00.000"
    },
    {
        "VOLUME": 1,
        "TIMESTAMP": "2015-05-28T12:16:00.000"
    },
    {
        "HIGH": 170.93,
        "LOW": 170.93,
        "OPEN": 170.93,
        "CLOSE": 170.93,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:17:00.000"
    },
    {
        "HIGH": 170.98,
        "LOW": 170.95,
        "OPEN": 170.95,
        "CLOSE": 170.98,
        "VOLUME": 212,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T12:18:00.000"
    },
    {
        "HIGH": 170.94,
        "LOW": 170.94,
        "OPEN": 170.94,
        "CLOSE": 170.94,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:19:00.000"
    },
    {
        "HIGH": 170.98,
        "LOW": 170.98,
        "OPEN": 170.98,
        "CLOSE": 170.98,
        "VOLUME": 101,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:20:00.000"
    },
    {
        "HIGH": 170.93,
        "LOW": 170.9,
        "OPEN": 170.9,
        "CLOSE": 170.93,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T12:21:00.000"
    },
    {
        "VOLUME": 51,
        "TIMESTAMP": "2015-05-28T12:22:00.000"
    },
    {
        "HIGH": 171.09,
        "LOW": 171.09,
        "OPEN": 171.09,
        "CLOSE": 171.09,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:23:00.000"
    },
    {
        "VOLUME": 100,
        "TIMESTAMP": "2015-05-28T12:24:00.000"
    },
    {
        "HIGH": 171.14,
        "LOW": 171.14,
        "OPEN": 171.14,
        "CLOSE": 171.14,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:25:00.000"
    },
    {
        "VOLUME": 11,
        "TIMESTAMP": "2015-05-28T12:27:00.000"
    },
    {
        "VOLUME": 100,
        "TIMESTAMP": "2015-05-28T12:29:00.000"
    },
    {
        "HIGH": 171.19,
        "LOW": 171.19,
        "OPEN": 171.19,
        "CLOSE": 171.19,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:30:00.000"
    },
    {
        "VOLUME": 19,
        "TIMESTAMP": "2015-05-28T12:31:00.000"
    },
    {
        "HIGH": 171.12,
        "LOW": 171.08,
        "OPEN": 171.1,
        "CLOSE": 171.08,
        "VOLUME": 1550,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T12:33:00.000"
    },
    {
        "HIGH": 170.99,
        "LOW": 170.99,
        "OPEN": 170.99,
        "CLOSE": 170.99,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:34:00.000"
    },
    {
        "HIGH": 170.92,
        "LOW": 170.92,
        "OPEN": 170.92,
        "CLOSE": 170.92,
        "VOLUME": 150,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:35:00.000"
    },
    {
        "HIGH": 170.88,
        "LOW": 170.88,
        "OPEN": 170.88,
        "CLOSE": 170.88,
        "VOLUME": 309,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T12:36:00.000"
    },
    {
        "HIGH": 170.84,
        "LOW": 170.84,
        "OPEN": 170.84,
        "CLOSE": 170.84,
        "VOLUME": 300,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T12:37:00.000"
    },
    {
        "HIGH": 170.85,
        "LOW": 170.85,
        "OPEN": 170.85,
        "CLOSE": 170.85,
        "VOLUME": 175,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:38:00.000"
    },
    {
        "VOLUME": 1,
        "TIMESTAMP": "2015-05-28T12:40:00.000"
    },
    {
        "VOLUME": 75,
        "TIMESTAMP": "2015-05-28T12:41:00.000"
    },
    {
        "HIGH": 170.92,
        "LOW": 170.9,
        "OPEN": 170.92,
        "CLOSE": 170.9,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T12:42:00.000"
    },
    {
        "VOLUME": 50,
        "TIMESTAMP": "2015-05-28T12:44:00.000"
    },
    {
        "HIGH": 170.97,
        "LOW": 170.97,
        "OPEN": 170.97,
        "CLOSE": 170.97,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:45:00.000"
    },
    {
        "HIGH": 171.01,
        "LOW": 170.97,
        "OPEN": 171.01,
        "CLOSE": 170.97,
        "VOLUME": 269,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T12:46:00.000"
    },
    {
        "HIGH": 170.99,
        "LOW": 170.99,
        "OPEN": 170.99,
        "CLOSE": 170.99,
        "VOLUME": 170,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:49:00.000"
    },
    {
        "VOLUME": 50,
        "TIMESTAMP": "2015-05-28T12:50:00.000"
    },
    {
        "HIGH": 170.96,
        "LOW": 170.96,
        "OPEN": 170.96,
        "CLOSE": 170.96,
        "VOLUME": 142,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:51:00.000"
    },
    {
        "HIGH": 170.99,
        "LOW": 170.99,
        "OPEN": 170.99,
        "CLOSE": 170.99,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:52:00.000"
    },
    {
        "VOLUME": 30,
        "TIMESTAMP": "2015-05-28T12:53:00.000"
    },
    {
        "HIGH": 171.04,
        "LOW": 171.04,
        "OPEN": 171.04,
        "CLOSE": 171.04,
        "VOLUME": 324,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T12:56:00.000"
    },
    {
        "HIGH": 171.05,
        "LOW": 171.02,
        "OPEN": 171.02,
        "CLOSE": 171.031,
        "VOLUME": 785,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T12:57:00.000"
    },
    {
        "VOLUME": 7,
        "TIMESTAMP": "2015-05-28T12:59:00.000"
    },
    {
        "HIGH": 171.08,
        "LOW": 171.08,
        "OPEN": 171.08,
        "CLOSE": 171.08,
        "VOLUME": 150,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:00:00.000"
    },
    {
        "HIGH": 171.04,
        "LOW": 171.03,
        "OPEN": 171.03,
        "CLOSE": 171.04,
        "VOLUME": 300,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:01:00.000"
    },
    {
        "HIGH": 171.04,
        "LOW": 171.04,
        "OPEN": 171.04,
        "CLOSE": 171.04,
        "VOLUME": 187,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:02:00.000"
    },
    {
        "HIGH": 171.23,
        "LOW": 171.22,
        "OPEN": 171.23,
        "CLOSE": 171.22,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:06:00.000"
    },
    {
        "HIGH": 171.19,
        "LOW": 171.19,
        "OPEN": 171.19,
        "CLOSE": 171.19,
        "VOLUME": 300,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:11:00.000"
    },
    {
        "HIGH": 171.13,
        "LOW": 171.13,
        "OPEN": 171.13,
        "CLOSE": 171.13,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:12:00.000"
    },
    {
        "VOLUME": 50,
        "TIMESTAMP": "2015-05-28T13:14:00.000"
    },
    {
        "HIGH": 171.16,
        "LOW": 171.14,
        "OPEN": 171.16,
        "CLOSE": 171.14,
        "VOLUME": 450,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T13:15:00.000"
    },
    {
        "HIGH": 171.17,
        "LOW": 171.17,
        "OPEN": 171.17,
        "CLOSE": 171.17,
        "VOLUME": 142,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:16:00.000"
    },
    {
        "HIGH": 171.15,
        "LOW": 171.08,
        "OPEN": 171.09,
        "CLOSE": 171.15,
        "VOLUME": 509,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T13:18:00.000"
    },
    {
        "HIGH": 171.14,
        "LOW": 171.08,
        "OPEN": 171.08,
        "CLOSE": 171.14,
        "VOLUME": 443,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:19:00.000"
    },
    {
        "HIGH": 171.13,
        "LOW": 171.13,
        "OPEN": 171.13,
        "CLOSE": 171.13,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:20:00.000"
    },
    {
        "VOLUME": 100,
        "TIMESTAMP": "2015-05-28T13:21:00.000"
    },
    {
        "HIGH": 171.11,
        "LOW": 171.11,
        "OPEN": 171.11,
        "CLOSE": 171.11,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:22:00.000"
    },
    {
        "VOLUME": 3,
        "TIMESTAMP": "2015-05-28T13:23:00.000"
    },
    {
        "VOLUME": 51,
        "TIMESTAMP": "2015-05-28T13:24:00.000"
    },
    {
        "HIGH": 171.21,
        "LOW": 171.16,
        "OPEN": 171.21,
        "CLOSE": 171.16,
        "VOLUME": 367,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:27:00.000"
    },
    {
        "HIGH": 171.19,
        "LOW": 171.16,
        "OPEN": 171.19,
        "CLOSE": 171.16,
        "VOLUME": 274,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:28:00.000"
    },
    {
        "VOLUME": 1,
        "TIMESTAMP": "2015-05-28T13:31:00.000"
    },
    {
        "HIGH": 171.18,
        "LOW": 171.16,
        "OPEN": 171.16,
        "CLOSE": 171.18,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T13:32:00.000"
    },
    {
        "HIGH": 171.2,
        "LOW": 171.19,
        "OPEN": 171.2,
        "CLOSE": 171.19,
        "VOLUME": 661,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T13:33:00.000"
    },
    {
        "HIGH": 171.18,
        "LOW": 171.15,
        "OPEN": 171.15,
        "CLOSE": 171.18,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T13:34:00.000"
    },
    {
        "HIGH": 171.19,
        "LOW": 171.15,
        "OPEN": 171.19,
        "CLOSE": 171.15,
        "VOLUME": 1300,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T13:35:00.000"
    },
    {
        "HIGH": 171.27,
        "LOW": 171.26,
        "OPEN": 171.26,
        "CLOSE": 171.27,
        "VOLUME": 374,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:36:00.000"
    },
    {
        "HIGH": 171.33,
        "LOW": 171.3,
        "OPEN": 171.33,
        "CLOSE": 171.3,
        "VOLUME": 502,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T13:37:00.000"
    },
    {
        "HIGH": 171.27,
        "LOW": 171.25,
        "OPEN": 171.25,
        "CLOSE": 171.27,
        "VOLUME": 400,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:38:00.000"
    },
    {
        "HIGH": 171.32,
        "LOW": 171.31,
        "OPEN": 171.31,
        "CLOSE": 171.32,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:39:00.000"
    },
    {
        "HIGH": 171.37,
        "LOW": 171.29,
        "OPEN": 171.37,
        "CLOSE": 171.31,
        "VOLUME": 600,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-28T13:40:00.000"
    },
    {
        "HIGH": 171.36,
        "LOW": 171.36,
        "OPEN": 171.36,
        "CLOSE": 171.36,
        "VOLUME": 321,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:42:00.000"
    },
    {
        "HIGH": 171.36,
        "LOW": 171.36,
        "OPEN": 171.36,
        "CLOSE": 171.36,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:44:00.000"
    },
    {
        "HIGH": 171.34,
        "LOW": 171.33,
        "OPEN": 171.34,
        "CLOSE": 171.33,
        "VOLUME": 300,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:46:00.000"
    },
    {
        "HIGH": 171.29,
        "LOW": 171.29,
        "OPEN": 171.29,
        "CLOSE": 171.29,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:48:00.000"
    },
    {
        "HIGH": 171.38,
        "LOW": 171.32,
        "OPEN": 171.32,
        "CLOSE": 171.38,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T13:49:00.000"
    },
    {
        "HIGH": 171.35,
        "LOW": 171.35,
        "OPEN": 171.35,
        "CLOSE": 171.35,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:50:00.000"
    },
    {
        "VOLUME": 100,
        "TIMESTAMP": "2015-05-28T13:52:00.000"
    },
    {
        "HIGH": 171.33,
        "LOW": 171.33,
        "OPEN": 171.33,
        "CLOSE": 171.33,
        "VOLUME": 239,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:53:00.000"
    },
    {
        "VOLUME": 50,
        "TIMESTAMP": "2015-05-28T13:54:00.000"
    },
    {
        "VOLUME": 100,
        "TIMESTAMP": "2015-05-28T13:55:00.000"
    },
    {
        "HIGH": 171.51,
        "LOW": 171.44,
        "OPEN": 171.44,
        "CLOSE": 171.51,
        "VOLUME": 427,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T13:56:00.000"
    },
    {
        "HIGH": 171.43,
        "LOW": 171.43,
        "OPEN": 171.43,
        "CLOSE": 171.43,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T13:57:00.000"
    },
    {
        "VOLUME": 100,
        "TIMESTAMP": "2015-05-28T13:58:00.000"
    },
    {
        "VOLUME": 50,
        "TIMESTAMP": "2015-05-28T13:59:00.000"
    },
    {
        "VOLUME": 1,
        "TIMESTAMP": "2015-05-28T14:00:00.000"
    },
    {
        "HIGH": 171.36,
        "LOW": 171.36,
        "OPEN": 171.36,
        "CLOSE": 171.36,
        "VOLUME": 400,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T14:01:00.000"
    },
    {
        "VOLUME": 181,
        "TIMESTAMP": "2015-05-28T14:03:00.000"
    },
    {
        "HIGH": 171.34,
        "LOW": 171.34,
        "OPEN": 171.34,
        "CLOSE": 171.34,
        "VOLUME": 315,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:04:00.000"
    },
    {
        "HIGH": 171.33,
        "LOW": 171.311,
        "OPEN": 171.311,
        "CLOSE": 171.33,
        "VOLUME": 433,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T14:05:00.000"
    },
    {
        "HIGH": 171.32,
        "LOW": 171.3,
        "OPEN": 171.32,
        "CLOSE": 171.3,
        "VOLUME": 256,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:06:00.000"
    },
    {
        "VOLUME": 100,
        "TIMESTAMP": "2015-05-28T14:07:00.000"
    },
    {
        "VOLUME": 87,
        "TIMESTAMP": "2015-05-28T14:09:00.000"
    },
    {
        "VOLUME": 15,
        "TIMESTAMP": "2015-05-28T14:10:00.000"
    },
    {
        "HIGH": 171.241,
        "LOW": 171.241,
        "OPEN": 171.241,
        "CLOSE": 171.241,
        "VOLUME": 150,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:12:00.000"
    },
    {
        "HIGH": 171.31,
        "LOW": 171.29,
        "OPEN": 171.29,
        "CLOSE": 171.31,
        "VOLUME": 207,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:13:00.000"
    },
    {
        "VOLUME": 98,
        "TIMESTAMP": "2015-05-28T14:14:00.000"
    },
    {
        "HIGH": 171.28,
        "LOW": 171.28,
        "OPEN": 171.28,
        "CLOSE": 171.28,
        "VOLUME": 400,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T14:15:00.000"
    },
    {
        "HIGH": 171.3,
        "LOW": 171.3,
        "OPEN": 171.3,
        "CLOSE": 171.3,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:16:00.000"
    },
    {
        "HIGH": 171.3,
        "LOW": 171.25,
        "OPEN": 171.3,
        "CLOSE": 171.25,
        "VOLUME": 542,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T14:17:00.000"
    },
    {
        "HIGH": 171.27,
        "LOW": 171.25,
        "OPEN": 171.27,
        "CLOSE": 171.25,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T14:18:00.000"
    },
    {
        "HIGH": 171.28,
        "LOW": 171.28,
        "OPEN": 171.28,
        "CLOSE": 171.28,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:19:00.000"
    },
    {
        "HIGH": 171.26,
        "LOW": 171.26,
        "OPEN": 171.26,
        "CLOSE": 171.26,
        "VOLUME": 102,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:20:00.000"
    },
    {
        "VOLUME": 10,
        "TIMESTAMP": "2015-05-28T14:21:00.000"
    },
    {
        "HIGH": 171.37,
        "LOW": 171.3,
        "OPEN": 171.3,
        "CLOSE": 171.37,
        "VOLUME": 907,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T14:22:00.000"
    },
    {
        "HIGH": 171.47,
        "LOW": 171.41,
        "OPEN": 171.41,
        "CLOSE": 171.43,
        "VOLUME": 749,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T14:23:00.000"
    },
    {
        "HIGH": 171.41,
        "LOW": 171.41,
        "OPEN": 171.41,
        "CLOSE": 171.41,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:24:00.000"
    },
    {
        "HIGH": 171.43,
        "LOW": 171.43,
        "OPEN": 171.43,
        "CLOSE": 171.43,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:25:00.000"
    },
    {
        "VOLUME": 69,
        "TIMESTAMP": "2015-05-28T14:26:00.000"
    },
    {
        "VOLUME": 1,
        "TIMESTAMP": "2015-05-28T14:27:00.000"
    },
    {
        "HIGH": 171.57,
        "LOW": 171.53,
        "OPEN": 171.57,
        "CLOSE": 171.53,
        "VOLUME": 319,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:28:00.000"
    },
    {
        "HIGH": 171.6,
        "LOW": 171.57,
        "OPEN": 171.57,
        "CLOSE": 171.6,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:30:00.000"
    },
    {
        "HIGH": 171.63,
        "LOW": 171.57,
        "OPEN": 171.63,
        "CLOSE": 171.57,
        "VOLUME": 397,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T14:31:00.000"
    },
    {
        "HIGH": 171.57,
        "LOW": 171.56,
        "OPEN": 171.56,
        "CLOSE": 171.56,
        "VOLUME": 356,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T14:32:00.000"
    },
    {
        "HIGH": 171.58,
        "LOW": 171.57,
        "OPEN": 171.57,
        "CLOSE": 171.58,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T14:33:00.000"
    },
    {
        "VOLUME": 70,
        "TIMESTAMP": "2015-05-28T14:34:00.000"
    },
    {
        "HIGH": 171.51,
        "LOW": 171.5,
        "OPEN": 171.51,
        "CLOSE": 171.5,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:36:00.000"
    },
    {
        "HIGH": 171.54,
        "LOW": 171.54,
        "OPEN": 171.54,
        "CLOSE": 171.54,
        "VOLUME": 406,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:37:00.000"
    },
    {
        "VOLUME": 6,
        "TIMESTAMP": "2015-05-28T14:38:00.000"
    },
    {
        "HIGH": 171.52,
        "LOW": 171.52,
        "OPEN": 171.52,
        "CLOSE": 171.52,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:39:00.000"
    },
    {
        "HIGH": 171.55,
        "LOW": 171.531,
        "OPEN": 171.55,
        "CLOSE": 171.531,
        "VOLUME": 394,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:40:00.000"
    },
    {
        "HIGH": 171.52,
        "LOW": 171.502,
        "OPEN": 171.51,
        "CLOSE": 171.52,
        "VOLUME": 500,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T14:42:00.000"
    },
    {
        "HIGH": 171.55,
        "LOW": 171.52,
        "OPEN": 171.54,
        "CLOSE": 171.52,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T14:43:00.000"
    },
    {
        "HIGH": 171.55,
        "LOW": 171.5,
        "OPEN": 171.5,
        "CLOSE": 171.55,
        "VOLUME": 401,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T14:45:00.000"
    },
    {
        "VOLUME": 65,
        "TIMESTAMP": "2015-05-28T14:47:00.000"
    },
    {
        "HIGH": 171.55,
        "LOW": 171.55,
        "OPEN": 171.55,
        "CLOSE": 171.55,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:48:00.000"
    },
    {
        "VOLUME": 1,
        "TIMESTAMP": "2015-05-28T14:49:00.000"
    },
    {
        "VOLUME": 79,
        "TIMESTAMP": "2015-05-28T14:50:00.000"
    },
    {
        "HIGH": 171.54,
        "LOW": 171.51,
        "OPEN": 171.51,
        "CLOSE": 171.54,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:51:00.000"
    },
    {
        "HIGH": 171.58,
        "LOW": 171.53,
        "OPEN": 171.53,
        "CLOSE": 171.58,
        "VOLUME": 509,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T14:52:00.000"
    },
    {
        "HIGH": 171.57,
        "LOW": 171.57,
        "OPEN": 171.57,
        "CLOSE": 171.57,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:53:00.000"
    },
    {
        "HIGH": 171.6,
        "LOW": 171.6,
        "OPEN": 171.6,
        "CLOSE": 171.6,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:54:00.000"
    },
    {
        "VOLUME": 35,
        "TIMESTAMP": "2015-05-28T14:55:00.000"
    },
    {
        "HIGH": 171.65,
        "LOW": 171.65,
        "OPEN": 171.65,
        "CLOSE": 171.65,
        "VOLUME": 220,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T14:56:00.000"
    },
    {
        "HIGH": 171.69,
        "LOW": 171.68,
        "OPEN": 171.69,
        "CLOSE": 171.68,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:57:00.000"
    },
    {
        "HIGH": 171.66,
        "LOW": 171.631,
        "OPEN": 171.66,
        "CLOSE": 171.631,
        "VOLUME": 222,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T14:59:00.000"
    },
    {
        "HIGH": 171.72,
        "LOW": 171.65,
        "OPEN": 171.65,
        "CLOSE": 171.71,
        "VOLUME": 400,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:00:00.000"
    },
    {
        "HIGH": 171.7,
        "LOW": 171.7,
        "OPEN": 171.7,
        "CLOSE": 171.7,
        "VOLUME": 181,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:01:00.000"
    },
    {
        "VOLUME": 102,
        "TIMESTAMP": "2015-05-28T15:02:00.000"
    },
    {
        "HIGH": 171.74,
        "LOW": 171.74,
        "OPEN": 171.74,
        "CLOSE": 171.74,
        "VOLUME": 300,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:03:00.000"
    },
    {
        "HIGH": 171.78,
        "LOW": 171.78,
        "OPEN": 171.78,
        "CLOSE": 171.78,
        "VOLUME": 332,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:04:00.000"
    },
    {
        "HIGH": 171.79,
        "LOW": 171.79,
        "OPEN": 171.79,
        "CLOSE": 171.79,
        "VOLUME": 368,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:05:00.000"
    },
    {
        "HIGH": 171.83,
        "LOW": 171.81,
        "OPEN": 171.81,
        "CLOSE": 171.83,
        "VOLUME": 400,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:06:00.000"
    },
    {
        "VOLUME": 50,
        "TIMESTAMP": "2015-05-28T15:07:00.000"
    },
    {
        "HIGH": 171.77,
        "LOW": 171.73,
        "OPEN": 171.73,
        "CLOSE": 171.77,
        "VOLUME": 701,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-28T15:08:00.000"
    },
    {
        "HIGH": 171.77,
        "LOW": 171.72,
        "OPEN": 171.77,
        "CLOSE": 171.72,
        "VOLUME": 403,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:09:00.000"
    },
    {
        "HIGH": 171.72,
        "LOW": 171.7,
        "OPEN": 171.72,
        "CLOSE": 171.7,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T15:10:00.000"
    },
    {
        "HIGH": 171.68,
        "LOW": 171.66,
        "OPEN": 171.68,
        "CLOSE": 171.68,
        "VOLUME": 506,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T15:11:00.000"
    },
    {
        "HIGH": 171.68,
        "LOW": 171.68,
        "OPEN": 171.68,
        "CLOSE": 171.68,
        "VOLUME": 270,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:12:00.000"
    },
    {
        "HIGH": 171.66,
        "LOW": 171.63,
        "OPEN": 171.63,
        "CLOSE": 171.64,
        "VOLUME": 817,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-28T15:14:00.000"
    },
    {
        "HIGH": 171.63,
        "LOW": 171.61,
        "OPEN": 171.61,
        "CLOSE": 171.63,
        "VOLUME": 502,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:15:00.000"
    },
    {
        "HIGH": 171.72,
        "LOW": 171.66,
        "OPEN": 171.66,
        "CLOSE": 171.71,
        "VOLUME": 528,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:16:00.000"
    },
    {
        "HIGH": 171.69,
        "LOW": 171.69,
        "OPEN": 171.69,
        "CLOSE": 171.69,
        "VOLUME": 430,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:17:00.000"
    },
    {
        "HIGH": 171.68,
        "LOW": 171.67,
        "OPEN": 171.67,
        "CLOSE": 171.67,
        "VOLUME": 321,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:18:00.000"
    },
    {
        "HIGH": 171.66,
        "LOW": 171.66,
        "OPEN": 171.66,
        "CLOSE": 171.66,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:20:00.000"
    },
    {
        "HIGH": 171.66,
        "LOW": 171.62,
        "OPEN": 171.63,
        "CLOSE": 171.66,
        "VOLUME": 501,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T15:21:00.000"
    },
    {
        "HIGH": 171.63,
        "LOW": 171.63,
        "OPEN": 171.63,
        "CLOSE": 171.63,
        "VOLUME": 218,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:22:00.000"
    },
    {
        "HIGH": 171.59,
        "LOW": 171.59,
        "OPEN": 171.59,
        "CLOSE": 171.59,
        "VOLUME": 291,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:23:00.000"
    },
    {
        "HIGH": 171.58,
        "LOW": 171.56,
        "OPEN": 171.58,
        "CLOSE": 171.56,
        "VOLUME": 210,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T15:24:00.000"
    },
    {
        "HIGH": 171.61,
        "LOW": 171.58,
        "OPEN": 171.58,
        "CLOSE": 171.61,
        "VOLUME": 214,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T15:25:00.000"
    },
    {
        "HIGH": 171.64,
        "LOW": 171.63,
        "OPEN": 171.63,
        "CLOSE": 171.64,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T15:26:00.000"
    },
    {
        "HIGH": 171.59,
        "LOW": 171.57,
        "OPEN": 171.59,
        "CLOSE": 171.58,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T15:27:00.000"
    },
    {
        "HIGH": 171.57,
        "LOW": 171.57,
        "OPEN": 171.57,
        "CLOSE": 171.57,
        "VOLUME": 352,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:28:00.000"
    },
    {
        "HIGH": 171.6,
        "LOW": 171.54,
        "OPEN": 171.57,
        "CLOSE": 171.6,
        "VOLUME": 847,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-28T15:29:00.000"
    },
    {
        "HIGH": 171.59,
        "LOW": 171.59,
        "OPEN": 171.59,
        "CLOSE": 171.59,
        "VOLUME": 310,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T15:30:00.000"
    },
    {
        "HIGH": 171.69,
        "LOW": 171.66,
        "OPEN": 171.66,
        "CLOSE": 171.68,
        "VOLUME": 624,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T15:31:00.000"
    },
    {
        "HIGH": 171.67,
        "LOW": 171.67,
        "OPEN": 171.67,
        "CLOSE": 171.67,
        "VOLUME": 221,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T15:32:00.000"
    },
    {
        "HIGH": 171.69,
        "LOW": 171.68,
        "OPEN": 171.68,
        "CLOSE": 171.69,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T15:33:00.000"
    },
    {
        "HIGH": 171.74,
        "LOW": 171.7,
        "OPEN": 171.74,
        "CLOSE": 171.72,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T15:34:00.000"
    },
    {
        "HIGH": 171.76,
        "LOW": 171.72,
        "OPEN": 171.72,
        "CLOSE": 171.74,
        "VOLUME": 312,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:35:00.000"
    },
    {
        "VOLUME": 100,
        "TIMESTAMP": "2015-05-28T15:36:00.000"
    },
    {
        "HIGH": 171.77,
        "LOW": 171.75,
        "OPEN": 171.75,
        "CLOSE": 171.77,
        "VOLUME": 800,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-28T15:37:00.000"
    },
    {
        "HIGH": 171.82,
        "LOW": 171.79,
        "OPEN": 171.82,
        "CLOSE": 171.79,
        "VOLUME": 500,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:38:00.000"
    },
    {
        "VOLUME": 37,
        "TIMESTAMP": "2015-05-28T15:39:00.000"
    },
    {
        "HIGH": 171.8,
        "LOW": 171.73,
        "OPEN": 171.73,
        "CLOSE": 171.8,
        "VOLUME": 463,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:40:00.000"
    },
    {
        "HIGH": 171.77,
        "LOW": 171.75,
        "OPEN": 171.75,
        "CLOSE": 171.75,
        "VOLUME": 504,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T15:41:00.000"
    },
    {
        "HIGH": 171.78,
        "LOW": 171.74,
        "OPEN": 171.74,
        "CLOSE": 171.77,
        "VOLUME": 302,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:42:00.000"
    },
    {
        "HIGH": 171.72,
        "LOW": 171.72,
        "OPEN": 171.72,
        "CLOSE": 171.72,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T15:43:00.000"
    },
    {
        "HIGH": 171.71,
        "LOW": 171.69,
        "OPEN": 171.71,
        "CLOSE": 171.71,
        "VOLUME": 604,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-28T15:44:00.000"
    },
    {
        "HIGH": 171.64,
        "LOW": 171.64,
        "OPEN": 171.64,
        "CLOSE": 171.64,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-28T15:45:00.000"
    },
    {
        "HIGH": 171.62,
        "LOW": 171.59,
        "OPEN": 171.6,
        "CLOSE": 171.62,
        "VOLUME": 884,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-28T15:46:00.000"
    },
    {
        "HIGH": 171.63,
        "LOW": 171.58,
        "OPEN": 171.63,
        "CLOSE": 171.58,
        "VOLUME": 1115,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-28T15:47:00.000"
    },
    {
        "HIGH": 171.64,
        "LOW": 171.62,
        "OPEN": 171.62,
        "CLOSE": 171.63,
        "VOLUME": 404,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:48:00.000"
    },
    {
        "HIGH": 171.62,
        "LOW": 171.58,
        "OPEN": 171.61,
        "CLOSE": 171.58,
        "VOLUME": 600,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T15:49:00.000"
    },
    {
        "HIGH": 171.62,
        "LOW": 171.55,
        "OPEN": 171.55,
        "CLOSE": 171.62,
        "VOLUME": 1002,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-28T15:50:00.000"
    },
    {
        "HIGH": 171.62,
        "LOW": 171.56,
        "OPEN": 171.62,
        "CLOSE": 171.56,
        "VOLUME": 1038,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T15:51:00.000"
    },
    {
        "HIGH": 171.58,
        "LOW": 171.56,
        "OPEN": 171.56,
        "CLOSE": 171.58,
        "VOLUME": 875,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-28T15:52:00.000"
    },
    {
        "HIGH": 171.63,
        "LOW": 171.61,
        "OPEN": 171.63,
        "CLOSE": 171.62,
        "VOLUME": 1044,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-28T15:53:00.000"
    },
    {
        "HIGH": 171.64,
        "LOW": 171.63,
        "OPEN": 171.63,
        "CLOSE": 171.64,
        "VOLUME": 374,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-28T15:54:00.000"
    },
    {
        "HIGH": 171.63,
        "LOW": 171.58,
        "OPEN": 171.62,
        "CLOSE": 171.63,
        "VOLUME": 1109,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-28T15:55:00.000"
    },
    {
        "HIGH": 171.72,
        "LOW": 171.67,
        "OPEN": 171.67,
        "CLOSE": 171.72,
        "VOLUME": 2666,
        "COUNT": 19,
        "TIMESTAMP": "2015-05-28T15:56:00.000"
    },
    {
        "HIGH": 171.71,
        "LOW": 171.68,
        "OPEN": 171.71,
        "CLOSE": 171.68,
        "VOLUME": 1495,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-28T15:57:00.000"
    },
    {
        "HIGH": 171.71,
        "LOW": 171.63,
        "OPEN": 171.69,
        "CLOSE": 171.67,
        "VOLUME": 2224,
        "COUNT": 13,
        "TIMESTAMP": "2015-05-28T15:58:00.000"
    },
    {
        "HIGH": 171.73,
        "LOW": 171.64,
        "OPEN": 171.65,
        "CLOSE": 171.69,
        "VOLUME": 4446,
        "COUNT": 18,
        "TIMESTAMP": "2015-05-28T15:59:00.000"
    },
    {
        "HIGH": 171.72,
        "LOW": 171.63,
        "OPEN": 171.69,
        "CLOSE": 171.72,
        "VOLUME": 9808,
        "COUNT": 43,
        "TIMESTAMP": "2015-05-28T16:00:00.000"
    },
    {
        "HIGH": 171.71,
        "LOW": 171.71,
        "OPEN": 171.71,
        "CLOSE": 171.71,
        "VOLUME": 162966,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-28T16:02:00.000"
    },
    {
        "HIGH": 171.18,
        "LOW": 171.14,
        "OPEN": 171.18,
        "CLOSE": 171.14,
        "VOLUME": 41858,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T09:31:00.000"
    },
    {
        "HIGH": 171.24,
        "LOW": 171.15,
        "OPEN": 171.24,
        "CLOSE": 171.15,
        "VOLUME": 807,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T09:32:00.000"
    },
    {
        "HIGH": 171.17,
        "LOW": 171.17,
        "OPEN": 171.17,
        "CLOSE": 171.17,
        "VOLUME": 110,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T09:33:00.000"
    },
    {
        "HIGH": 171.17,
        "LOW": 171.1,
        "OPEN": 171.17,
        "CLOSE": 171.1,
        "VOLUME": 801,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T09:34:00.000"
    },
    {
        "HIGH": 171.14,
        "LOW": 171,
        "OPEN": 171.13,
        "CLOSE": 171.14,
        "VOLUME": 736,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T09:35:00.000"
    },
    {
        "HIGH": 171.12,
        "LOW": 171,
        "OPEN": 171.12,
        "CLOSE": 171.05,
        "VOLUME": 1533,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T09:36:00.000"
    },
    {
        "HIGH": 171.07,
        "LOW": 170.94,
        "OPEN": 171,
        "CLOSE": 171.07,
        "VOLUME": 991,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T09:37:00.000"
    },
    {
        "HIGH": 171.18,
        "LOW": 171.08,
        "OPEN": 171.08,
        "CLOSE": 171.18,
        "VOLUME": 700,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T09:38:00.000"
    },
    {
        "HIGH": 171.16,
        "LOW": 170.91,
        "OPEN": 171.09,
        "CLOSE": 170.91,
        "VOLUME": 945,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T09:39:00.000"
    },
    {
        "HIGH": 170.94,
        "LOW": 170.84,
        "OPEN": 170.92,
        "CLOSE": 170.91,
        "VOLUME": 1610,
        "COUNT": 13,
        "TIMESTAMP": "2015-05-29T09:40:00.000"
    },
    {
        "HIGH": 170.79,
        "LOW": 170.69,
        "OPEN": 170.79,
        "CLOSE": 170.69,
        "VOLUME": 3168,
        "COUNT": 18,
        "TIMESTAMP": "2015-05-29T09:41:00.000"
    },
    {
        "HIGH": 170.84,
        "LOW": 170.84,
        "OPEN": 170.84,
        "CLOSE": 170.84,
        "VOLUME": 177,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T09:42:00.000"
    },
    {
        "HIGH": 170.73,
        "LOW": 170.56,
        "OPEN": 170.73,
        "CLOSE": 170.56,
        "VOLUME": 1700,
        "COUNT": 12,
        "TIMESTAMP": "2015-05-29T09:43:00.000"
    },
    {
        "HIGH": 170.86,
        "LOW": 170.5,
        "OPEN": 170.62,
        "CLOSE": 170.75,
        "VOLUME": 4331,
        "COUNT": 23,
        "TIMESTAMP": "2015-05-29T09:44:00.000"
    },
    {
        "HIGH": 170.9,
        "LOW": 170.68,
        "OPEN": 170.68,
        "CLOSE": 170.82,
        "VOLUME": 2800,
        "COUNT": 20,
        "TIMESTAMP": "2015-05-29T09:45:00.000"
    },
    {
        "HIGH": 170.77,
        "LOW": 170.67,
        "OPEN": 170.75,
        "CLOSE": 170.725,
        "VOLUME": 2343,
        "COUNT": 19,
        "TIMESTAMP": "2015-05-29T09:46:00.000"
    },
    {
        "HIGH": 170.8,
        "LOW": 170.71,
        "OPEN": 170.71,
        "CLOSE": 170.8,
        "VOLUME": 840,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T09:47:00.000"
    },
    {
        "HIGH": 170.955,
        "LOW": 170.925,
        "OPEN": 170.95,
        "CLOSE": 170.95,
        "VOLUME": 1400,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-29T09:48:00.000"
    },
    {
        "HIGH": 171,
        "LOW": 170.94,
        "OPEN": 170.96,
        "CLOSE": 170.97,
        "VOLUME": 900,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T09:49:00.000"
    },
    {
        "HIGH": 170.975,
        "LOW": 170.7,
        "OPEN": 170.945,
        "CLOSE": 170.71,
        "VOLUME": 1353,
        "COUNT": 12,
        "TIMESTAMP": "2015-05-29T09:50:00.000"
    },
    {
        "HIGH": 170.9,
        "LOW": 170.745,
        "OPEN": 170.745,
        "CLOSE": 170.9,
        "VOLUME": 600,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T09:51:00.000"
    },
    {
        "HIGH": 170.92,
        "LOW": 170.74,
        "OPEN": 170.92,
        "CLOSE": 170.8,
        "VOLUME": 2253,
        "COUNT": 17,
        "TIMESTAMP": "2015-05-29T09:52:00.000"
    },
    {
        "HIGH": 170.81,
        "LOW": 170.74,
        "OPEN": 170.8,
        "CLOSE": 170.81,
        "VOLUME": 1248,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T09:53:00.000"
    },
    {
        "HIGH": 170.82,
        "LOW": 170.79,
        "OPEN": 170.81,
        "CLOSE": 170.82,
        "VOLUME": 600,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T09:54:00.000"
    },
    {
        "HIGH": 170.885,
        "LOW": 170.84,
        "OPEN": 170.885,
        "CLOSE": 170.85,
        "VOLUME": 1269,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T09:55:00.000"
    },
    {
        "HIGH": 171,
        "LOW": 170.88,
        "OPEN": 170.88,
        "CLOSE": 170.91,
        "VOLUME": 1717,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-29T09:56:00.000"
    },
    {
        "HIGH": 171.05,
        "LOW": 171,
        "OPEN": 171.03,
        "CLOSE": 171,
        "VOLUME": 835,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T09:57:00.000"
    },
    {
        "HIGH": 170.96,
        "LOW": 170.96,
        "OPEN": 170.96,
        "CLOSE": 170.96,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T09:58:00.000"
    },
    {
        "HIGH": 170.95,
        "LOW": 170.87,
        "OPEN": 170.945,
        "CLOSE": 170.95,
        "VOLUME": 620,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T09:59:00.000"
    },
    {
        "HIGH": 171.02,
        "LOW": 170.9,
        "OPEN": 171.02,
        "CLOSE": 170.9,
        "VOLUME": 501,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T10:00:00.000"
    },
    {
        "HIGH": 171.1,
        "LOW": 170.975,
        "OPEN": 170.975,
        "CLOSE": 171.06,
        "VOLUME": 2000,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-29T10:01:00.000"
    },
    {
        "HIGH": 171.03,
        "LOW": 170.91,
        "OPEN": 171.03,
        "CLOSE": 171,
        "VOLUME": 793,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T10:02:00.000"
    },
    {
        "HIGH": 171.01,
        "LOW": 171.01,
        "OPEN": 171.01,
        "CLOSE": 171.01,
        "VOLUME": 417,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:03:00.000"
    },
    {
        "HIGH": 170.94,
        "LOW": 170.94,
        "OPEN": 170.94,
        "CLOSE": 170.94,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:04:00.000"
    },
    {
        "HIGH": 171.05,
        "LOW": 171.05,
        "OPEN": 171.05,
        "CLOSE": 171.05,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T10:05:00.000"
    },
    {
        "HIGH": 170.95,
        "LOW": 170.91,
        "OPEN": 170.95,
        "CLOSE": 170.91,
        "VOLUME": 1002,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T10:06:00.000"
    },
    {
        "HIGH": 170.86,
        "LOW": 170.76,
        "OPEN": 170.76,
        "CLOSE": 170.77,
        "VOLUME": 481,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T10:07:00.000"
    },
    {
        "HIGH": 170.85,
        "LOW": 170.85,
        "OPEN": 170.85,
        "CLOSE": 170.85,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T10:08:00.000"
    },
    {
        "HIGH": 170.87,
        "LOW": 170.87,
        "OPEN": 170.87,
        "CLOSE": 170.87,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T10:09:00.000"
    },
    {
        "HIGH": 170.84,
        "LOW": 170.75,
        "OPEN": 170.75,
        "CLOSE": 170.78,
        "VOLUME": 600,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T10:10:00.000"
    },
    {
        "HIGH": 170.8,
        "LOW": 170.71,
        "OPEN": 170.71,
        "CLOSE": 170.8,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:11:00.000"
    },
    {
        "HIGH": 170.79,
        "LOW": 170.73,
        "OPEN": 170.78,
        "CLOSE": 170.73,
        "VOLUME": 600,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T10:12:00.000"
    },
    {
        "HIGH": 170.69,
        "LOW": 170.69,
        "OPEN": 170.69,
        "CLOSE": 170.69,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T10:13:00.000"
    },
    {
        "HIGH": 170.73,
        "LOW": 170.71,
        "OPEN": 170.73,
        "CLOSE": 170.71,
        "VOLUME": 300,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:15:00.000"
    },
    {
        "HIGH": 170.73,
        "LOW": 170.61,
        "OPEN": 170.72,
        "CLOSE": 170.72,
        "VOLUME": 1411,
        "COUNT": 12,
        "TIMESTAMP": "2015-05-29T10:16:00.000"
    },
    {
        "HIGH": 170.72,
        "LOW": 170.64,
        "OPEN": 170.72,
        "CLOSE": 170.7,
        "VOLUME": 1000,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T10:17:00.000"
    },
    {
        "HIGH": 170.795,
        "LOW": 170.795,
        "OPEN": 170.795,
        "CLOSE": 170.795,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:18:00.000"
    },
    {
        "HIGH": 170.79,
        "LOW": 170.735,
        "OPEN": 170.79,
        "CLOSE": 170.74,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T10:19:00.000"
    },
    {
        "VOLUME": 32,
        "TIMESTAMP": "2015-05-29T10:20:00.000"
    },
    {
        "HIGH": 170.9,
        "LOW": 170.865,
        "OPEN": 170.87,
        "CLOSE": 170.885,
        "VOLUME": 810,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T10:22:00.000"
    },
    {
        "HIGH": 170.97,
        "LOW": 170.965,
        "OPEN": 170.97,
        "CLOSE": 170.965,
        "VOLUME": 240,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:23:00.000"
    },
    {
        "HIGH": 170.925,
        "LOW": 170.91,
        "OPEN": 170.925,
        "CLOSE": 170.91,
        "VOLUME": 400,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T10:24:00.000"
    },
    {
        "HIGH": 170.91,
        "LOW": 170.875,
        "OPEN": 170.875,
        "CLOSE": 170.91,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T10:25:00.000"
    },
    {
        "HIGH": 170.99,
        "LOW": 170.92,
        "OPEN": 170.92,
        "CLOSE": 170.95,
        "VOLUME": 606,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T10:26:00.000"
    },
    {
        "HIGH": 170.96,
        "LOW": 170.92,
        "OPEN": 170.935,
        "CLOSE": 170.92,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T10:27:00.000"
    },
    {
        "HIGH": 170.945,
        "LOW": 170.91,
        "OPEN": 170.945,
        "CLOSE": 170.91,
        "VOLUME": 336,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:28:00.000"
    },
    {
        "HIGH": 170.925,
        "LOW": 170.83,
        "OPEN": 170.925,
        "CLOSE": 170.9,
        "VOLUME": 616,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T10:29:00.000"
    },
    {
        "HIGH": 170.895,
        "LOW": 170.74,
        "OPEN": 170.895,
        "CLOSE": 170.74,
        "VOLUME": 1054,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-29T10:30:00.000"
    },
    {
        "HIGH": 170.73,
        "LOW": 170.63,
        "OPEN": 170.73,
        "CLOSE": 170.63,
        "VOLUME": 744,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T10:31:00.000"
    },
    {
        "HIGH": 170.665,
        "LOW": 170.64,
        "OPEN": 170.665,
        "CLOSE": 170.64,
        "VOLUME": 400,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T10:32:00.000"
    },
    {
        "HIGH": 170.645,
        "LOW": 170.62,
        "OPEN": 170.645,
        "CLOSE": 170.62,
        "VOLUME": 600,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T10:33:00.000"
    },
    {
        "HIGH": 170.605,
        "LOW": 170.58,
        "OPEN": 170.605,
        "CLOSE": 170.605,
        "VOLUME": 500,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T10:34:00.000"
    },
    {
        "HIGH": 170.59,
        "LOW": 170.52,
        "OPEN": 170.545,
        "CLOSE": 170.59,
        "VOLUME": 688,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T10:35:00.000"
    },
    {
        "HIGH": 170.605,
        "LOW": 170.58,
        "OPEN": 170.595,
        "CLOSE": 170.58,
        "VOLUME": 1025,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-29T10:36:00.000"
    },
    {
        "HIGH": 170.575,
        "LOW": 170.54,
        "OPEN": 170.575,
        "CLOSE": 170.555,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T10:37:00.000"
    },
    {
        "HIGH": 170.565,
        "LOW": 170.435,
        "OPEN": 170.565,
        "CLOSE": 170.435,
        "VOLUME": 830,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T10:38:00.000"
    },
    {
        "HIGH": 170.62,
        "LOW": 170.58,
        "OPEN": 170.58,
        "CLOSE": 170.585,
        "VOLUME": 400,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T10:39:00.000"
    },
    {
        "HIGH": 170.68,
        "LOW": 170.585,
        "OPEN": 170.62,
        "CLOSE": 170.68,
        "VOLUME": 500,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T10:40:00.000"
    },
    {
        "HIGH": 170.675,
        "LOW": 170.65,
        "OPEN": 170.675,
        "CLOSE": 170.65,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:41:00.000"
    },
    {
        "HIGH": 170.64,
        "LOW": 170.59,
        "OPEN": 170.64,
        "CLOSE": 170.62,
        "VOLUME": 510,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T10:42:00.000"
    },
    {
        "HIGH": 170.635,
        "LOW": 170.55,
        "OPEN": 170.635,
        "CLOSE": 170.55,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T10:43:00.000"
    },
    {
        "HIGH": 170.55,
        "LOW": 170.48,
        "OPEN": 170.5,
        "CLOSE": 170.495,
        "VOLUME": 700,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T10:44:00.000"
    },
    {
        "HIGH": 170.49,
        "LOW": 170.27,
        "OPEN": 170.49,
        "CLOSE": 170.36,
        "VOLUME": 839,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T10:45:00.000"
    },
    {
        "HIGH": 170.29,
        "LOW": 170.15,
        "OPEN": 170.29,
        "CLOSE": 170.15,
        "VOLUME": 488,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T10:46:00.000"
    },
    {
        "HIGH": 170.17,
        "LOW": 170.12,
        "OPEN": 170.17,
        "CLOSE": 170.14,
        "VOLUME": 1289,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-29T10:47:00.000"
    },
    {
        "HIGH": 170.1,
        "LOW": 170.08,
        "OPEN": 170.1,
        "CLOSE": 170.08,
        "VOLUME": 700,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:48:00.000"
    },
    {
        "HIGH": 170.1,
        "LOW": 170.01,
        "OPEN": 170.1,
        "CLOSE": 170.01,
        "VOLUME": 1939,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-29T10:50:00.000"
    },
    {
        "HIGH": 170.06,
        "LOW": 169.99,
        "OPEN": 170.01,
        "CLOSE": 170.06,
        "VOLUME": 3672,
        "COUNT": 12,
        "TIMESTAMP": "2015-05-29T10:51:00.000"
    },
    {
        "HIGH": 170.12,
        "LOW": 169.94,
        "OPEN": 170.07,
        "CLOSE": 169.97,
        "VOLUME": 954,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T10:52:00.000"
    },
    {
        "HIGH": 170.09,
        "LOW": 169.92,
        "OPEN": 169.92,
        "CLOSE": 170.07,
        "VOLUME": 401,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T10:53:00.000"
    },
    {
        "HIGH": 170.001,
        "LOW": 170.001,
        "OPEN": 170.001,
        "CLOSE": 170.001,
        "VOLUME": 350,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T10:55:00.000"
    },
    {
        "HIGH": 170,
        "LOW": 169.95,
        "OPEN": 170,
        "CLOSE": 169.95,
        "VOLUME": 560,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T10:56:00.000"
    },
    {
        "HIGH": 170.01,
        "LOW": 170,
        "OPEN": 170,
        "CLOSE": 170.01,
        "VOLUME": 911,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T10:57:00.000"
    },
    {
        "HIGH": 170.145,
        "LOW": 170.145,
        "OPEN": 170.145,
        "CLOSE": 170.145,
        "VOLUME": 333,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T10:58:00.000"
    },
    {
        "HIGH": 170.17,
        "LOW": 170.12,
        "OPEN": 170.13,
        "CLOSE": 170.17,
        "VOLUME": 700,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T10:59:00.000"
    },
    {
        "HIGH": 170.17,
        "LOW": 170.13,
        "OPEN": 170.15,
        "CLOSE": 170.17,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T11:00:00.000"
    },
    {
        "HIGH": 170.2,
        "LOW": 170.12,
        "OPEN": 170.19,
        "CLOSE": 170.2,
        "VOLUME": 700,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T11:01:00.000"
    },
    {
        "HIGH": 170.33,
        "LOW": 170.27,
        "OPEN": 170.27,
        "CLOSE": 170.33,
        "VOLUME": 509,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T11:02:00.000"
    },
    {
        "HIGH": 170.31,
        "LOW": 170.19,
        "OPEN": 170.31,
        "CLOSE": 170.19,
        "VOLUME": 503,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T11:03:00.000"
    },
    {
        "HIGH": 170.24,
        "LOW": 170.24,
        "OPEN": 170.24,
        "CLOSE": 170.24,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T11:04:00.000"
    },
    {
        "HIGH": 170.31,
        "LOW": 170.265,
        "OPEN": 170.31,
        "CLOSE": 170.265,
        "VOLUME": 804,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T11:05:00.000"
    },
    {
        "HIGH": 170.25,
        "LOW": 170.21,
        "OPEN": 170.25,
        "CLOSE": 170.21,
        "VOLUME": 572,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T11:06:00.000"
    },
    {
        "HIGH": 170.325,
        "LOW": 170.25,
        "OPEN": 170.25,
        "CLOSE": 170.325,
        "VOLUME": 800,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T11:07:00.000"
    },
    {
        "VOLUME": 20,
        "TIMESTAMP": "2015-05-29T11:08:00.000"
    },
    {
        "HIGH": 170.405,
        "LOW": 170.3,
        "OPEN": 170.405,
        "CLOSE": 170.32,
        "VOLUME": 801,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T11:09:00.000"
    },
    {
        "HIGH": 170.25,
        "LOW": 170.24,
        "OPEN": 170.24,
        "CLOSE": 170.25,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T11:10:00.000"
    },
    {
        "HIGH": 170.27,
        "LOW": 170.27,
        "OPEN": 170.27,
        "CLOSE": 170.27,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:11:00.000"
    },
    {
        "HIGH": 170.3,
        "LOW": 170.22,
        "OPEN": 170.22,
        "CLOSE": 170.3,
        "VOLUME": 628,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T11:12:00.000"
    },
    {
        "HIGH": 170.33,
        "LOW": 170.255,
        "OPEN": 170.28,
        "CLOSE": 170.29,
        "VOLUME": 709,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T11:13:00.000"
    },
    {
        "HIGH": 170.29,
        "LOW": 170.29,
        "OPEN": 170.29,
        "CLOSE": 170.29,
        "VOLUME": 110,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:15:00.000"
    },
    {
        "HIGH": 170.28,
        "LOW": 170.27,
        "OPEN": 170.28,
        "CLOSE": 170.27,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T11:16:00.000"
    },
    {
        "HIGH": 170.38,
        "LOW": 170.36,
        "OPEN": 170.36,
        "CLOSE": 170.38,
        "VOLUME": 216,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T11:17:00.000"
    },
    {
        "HIGH": 170.47,
        "LOW": 170.47,
        "OPEN": 170.47,
        "CLOSE": 170.47,
        "VOLUME": 202,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:18:00.000"
    },
    {
        "HIGH": 170.47,
        "LOW": 170.44,
        "OPEN": 170.47,
        "CLOSE": 170.47,
        "VOLUME": 419,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T11:19:00.000"
    },
    {
        "HIGH": 170.45,
        "LOW": 170.38,
        "OPEN": 170.45,
        "CLOSE": 170.38,
        "VOLUME": 553,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T11:20:00.000"
    },
    {
        "HIGH": 170.38,
        "LOW": 170.29,
        "OPEN": 170.38,
        "CLOSE": 170.29,
        "VOLUME": 976,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T11:22:00.000"
    },
    {
        "HIGH": 170.38,
        "LOW": 170.32,
        "OPEN": 170.32,
        "CLOSE": 170.38,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T11:23:00.000"
    },
    {
        "HIGH": 170.34,
        "LOW": 170.32,
        "OPEN": 170.34,
        "CLOSE": 170.33,
        "VOLUME": 433,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T11:25:00.000"
    },
    {
        "HIGH": 170.24,
        "LOW": 170.18,
        "OPEN": 170.23,
        "CLOSE": 170.21,
        "VOLUME": 1533,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-29T11:26:00.000"
    },
    {
        "HIGH": 170.26,
        "LOW": 170.21,
        "OPEN": 170.21,
        "CLOSE": 170.24,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T11:27:00.000"
    },
    {
        "HIGH": 170.235,
        "LOW": 170.2,
        "OPEN": 170.21,
        "CLOSE": 170.235,
        "VOLUME": 312,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T11:28:00.000"
    },
    {
        "HIGH": 170.29,
        "LOW": 170.23,
        "OPEN": 170.25,
        "CLOSE": 170.23,
        "VOLUME": 766,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T11:29:00.000"
    },
    {
        "HIGH": 170.16,
        "LOW": 170.16,
        "OPEN": 170.16,
        "CLOSE": 170.16,
        "VOLUME": 113,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:30:00.000"
    },
    {
        "HIGH": 170.16,
        "LOW": 170.031,
        "OPEN": 170.08,
        "CLOSE": 170.16,
        "VOLUME": 1206,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-29T11:31:00.000"
    },
    {
        "HIGH": 170.13,
        "LOW": 170.07,
        "OPEN": 170.13,
        "CLOSE": 170.07,
        "VOLUME": 310,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T11:32:00.000"
    },
    {
        "HIGH": 170.12,
        "LOW": 170.12,
        "OPEN": 170.12,
        "CLOSE": 170.12,
        "VOLUME": 162,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:33:00.000"
    },
    {
        "HIGH": 170.17,
        "LOW": 170.08,
        "OPEN": 170.15,
        "CLOSE": 170.16,
        "VOLUME": 1992,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T11:34:00.000"
    },
    {
        "HIGH": 170.2,
        "LOW": 170.09,
        "OPEN": 170.2,
        "CLOSE": 170.18,
        "VOLUME": 843,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T11:35:00.000"
    },
    {
        "HIGH": 170.2,
        "LOW": 170.15,
        "OPEN": 170.19,
        "CLOSE": 170.15,
        "VOLUME": 593,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T11:36:00.000"
    },
    {
        "HIGH": 170.23,
        "LOW": 170.13,
        "OPEN": 170.17,
        "CLOSE": 170.13,
        "VOLUME": 1432,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T11:37:00.000"
    },
    {
        "VOLUME": 10,
        "TIMESTAMP": "2015-05-29T11:38:00.000"
    },
    {
        "HIGH": 170.16,
        "LOW": 170.08,
        "OPEN": 170.08,
        "CLOSE": 170.11,
        "VOLUME": 812,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T11:39:00.000"
    },
    {
        "HIGH": 170.26,
        "LOW": 170.2,
        "OPEN": 170.2,
        "CLOSE": 170.26,
        "VOLUME": 209,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T11:40:00.000"
    },
    {
        "VOLUME": 99,
        "TIMESTAMP": "2015-05-29T11:41:00.000"
    },
    {
        "HIGH": 170.37,
        "LOW": 170.37,
        "OPEN": 170.37,
        "CLOSE": 170.37,
        "VOLUME": 212,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:42:00.000"
    },
    {
        "HIGH": 170.45,
        "LOW": 170.42,
        "OPEN": 170.42,
        "CLOSE": 170.45,
        "VOLUME": 1292,
        "COUNT": 11,
        "TIMESTAMP": "2015-05-29T11:43:00.000"
    },
    {
        "HIGH": 170.55,
        "LOW": 170.49,
        "OPEN": 170.49,
        "CLOSE": 170.55,
        "VOLUME": 413,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T11:44:00.000"
    },
    {
        "VOLUME": 24,
        "TIMESTAMP": "2015-05-29T11:45:00.000"
    },
    {
        "VOLUME": 32,
        "TIMESTAMP": "2015-05-29T11:46:00.000"
    },
    {
        "HIGH": 170.52,
        "LOW": 170.52,
        "OPEN": 170.52,
        "CLOSE": 170.52,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:47:00.000"
    },
    {
        "HIGH": 170.59,
        "LOW": 170.58,
        "OPEN": 170.58,
        "CLOSE": 170.59,
        "VOLUME": 278,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T11:48:00.000"
    },
    {
        "HIGH": 170.68,
        "LOW": 170.63,
        "OPEN": 170.67,
        "CLOSE": 170.63,
        "VOLUME": 457,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T11:49:00.000"
    },
    {
        "VOLUME": 137,
        "TIMESTAMP": "2015-05-29T11:50:00.000"
    },
    {
        "VOLUME": 75,
        "TIMESTAMP": "2015-05-29T11:51:00.000"
    },
    {
        "HIGH": 170.67,
        "LOW": 170.62,
        "OPEN": 170.67,
        "CLOSE": 170.62,
        "VOLUME": 431,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T11:52:00.000"
    },
    {
        "HIGH": 170.64,
        "LOW": 170.64,
        "OPEN": 170.64,
        "CLOSE": 170.64,
        "VOLUME": 209,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:53:00.000"
    },
    {
        "VOLUME": 89,
        "TIMESTAMP": "2015-05-29T11:54:00.000"
    },
    {
        "HIGH": 170.78,
        "LOW": 170.76,
        "OPEN": 170.76,
        "CLOSE": 170.78,
        "VOLUME": 309,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T11:55:00.000"
    },
    {
        "HIGH": 170.77,
        "LOW": 170.77,
        "OPEN": 170.77,
        "CLOSE": 170.77,
        "VOLUME": 108,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:56:00.000"
    },
    {
        "HIGH": 170.7,
        "LOW": 170.7,
        "OPEN": 170.7,
        "CLOSE": 170.7,
        "VOLUME": 302,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T11:57:00.000"
    },
    {
        "HIGH": 170.69,
        "LOW": 170.69,
        "OPEN": 170.69,
        "CLOSE": 170.69,
        "VOLUME": 112,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T11:58:00.000"
    },
    {
        "VOLUME": 21,
        "TIMESTAMP": "2015-05-29T11:59:00.000"
    },
    {
        "HIGH": 170.74,
        "LOW": 170.72,
        "OPEN": 170.72,
        "CLOSE": 170.74,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:00:00.000"
    },
    {
        "HIGH": 170.79,
        "LOW": 170.77,
        "OPEN": 170.77,
        "CLOSE": 170.79,
        "VOLUME": 271,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:01:00.000"
    },
    {
        "HIGH": 170.84,
        "LOW": 170.81,
        "OPEN": 170.81,
        "CLOSE": 170.84,
        "VOLUME": 507,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T12:02:00.000"
    },
    {
        "VOLUME": 94,
        "TIMESTAMP": "2015-05-29T12:03:00.000"
    },
    {
        "HIGH": 170.86,
        "LOW": 170.79,
        "OPEN": 170.79,
        "CLOSE": 170.82,
        "VOLUME": 726,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T12:04:00.000"
    },
    {
        "HIGH": 170.84,
        "LOW": 170.72,
        "OPEN": 170.84,
        "CLOSE": 170.72,
        "VOLUME": 646,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T12:05:00.000"
    },
    {
        "HIGH": 170.71,
        "LOW": 170.71,
        "OPEN": 170.71,
        "CLOSE": 170.71,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:06:00.000"
    },
    {
        "VOLUME": 190,
        "TIMESTAMP": "2015-05-29T12:07:00.000"
    },
    {
        "HIGH": 170.72,
        "LOW": 170.63,
        "OPEN": 170.72,
        "CLOSE": 170.63,
        "VOLUME": 1319,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T12:08:00.000"
    },
    {
        "HIGH": 170.65,
        "LOW": 170.65,
        "OPEN": 170.65,
        "CLOSE": 170.65,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:09:00.000"
    },
    {
        "HIGH": 170.68,
        "LOW": 170.63,
        "OPEN": 170.68,
        "CLOSE": 170.63,
        "VOLUME": 219,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:10:00.000"
    },
    {
        "HIGH": 170.67,
        "LOW": 170.67,
        "OPEN": 170.67,
        "CLOSE": 170.67,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:11:00.000"
    },
    {
        "HIGH": 170.69,
        "LOW": 170.69,
        "OPEN": 170.69,
        "CLOSE": 170.69,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:12:00.000"
    },
    {
        "HIGH": 170.74,
        "LOW": 170.59,
        "OPEN": 170.74,
        "CLOSE": 170.59,
        "VOLUME": 1200,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T12:13:00.000"
    },
    {
        "HIGH": 170.57,
        "LOW": 170.51,
        "OPEN": 170.57,
        "CLOSE": 170.51,
        "VOLUME": 679,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T12:14:00.000"
    },
    {
        "HIGH": 170.58,
        "LOW": 170.58,
        "OPEN": 170.58,
        "CLOSE": 170.58,
        "VOLUME": 111,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:15:00.000"
    },
    {
        "HIGH": 170.7,
        "LOW": 170.59,
        "OPEN": 170.62,
        "CLOSE": 170.63,
        "VOLUME": 1869,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T12:16:00.000"
    },
    {
        "VOLUME": 99,
        "TIMESTAMP": "2015-05-29T12:17:00.000"
    },
    {
        "HIGH": 170.55,
        "LOW": 170.55,
        "OPEN": 170.55,
        "CLOSE": 170.55,
        "VOLUME": 693,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T12:18:00.000"
    },
    {
        "HIGH": 170.6,
        "LOW": 170.54,
        "OPEN": 170.54,
        "CLOSE": 170.6,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T12:19:00.000"
    },
    {
        "HIGH": 170.64,
        "LOW": 170.6,
        "OPEN": 170.63,
        "CLOSE": 170.6,
        "VOLUME": 925,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T12:20:00.000"
    },
    {
        "HIGH": 170.63,
        "LOW": 170.57,
        "OPEN": 170.59,
        "CLOSE": 170.57,
        "VOLUME": 603,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T12:21:00.000"
    },
    {
        "HIGH": 170.57,
        "LOW": 170.55,
        "OPEN": 170.55,
        "CLOSE": 170.57,
        "VOLUME": 206,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:22:00.000"
    },
    {
        "HIGH": 170.5,
        "LOW": 170.5,
        "OPEN": 170.5,
        "CLOSE": 170.5,
        "VOLUME": 1702,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:23:00.000"
    },
    {
        "HIGH": 170.59,
        "LOW": 170.5,
        "OPEN": 170.5,
        "CLOSE": 170.55,
        "VOLUME": 910,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-29T12:24:00.000"
    },
    {
        "HIGH": 170.53,
        "LOW": 170.52,
        "OPEN": 170.53,
        "CLOSE": 170.52,
        "VOLUME": 510,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T12:25:00.000"
    },
    {
        "HIGH": 170.6,
        "LOW": 170.52,
        "OPEN": 170.52,
        "CLOSE": 170.6,
        "VOLUME": 607,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T12:26:00.000"
    },
    {
        "HIGH": 170.71,
        "LOW": 170.71,
        "OPEN": 170.71,
        "CLOSE": 170.71,
        "VOLUME": 101,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:28:00.000"
    },
    {
        "HIGH": 170.68,
        "LOW": 170.68,
        "OPEN": 170.68,
        "CLOSE": 170.68,
        "VOLUME": 278,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:29:00.000"
    },
    {
        "HIGH": 170.67,
        "LOW": 170.67,
        "OPEN": 170.67,
        "CLOSE": 170.67,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:30:00.000"
    },
    {
        "HIGH": 170.84,
        "LOW": 170.78,
        "OPEN": 170.78,
        "CLOSE": 170.84,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T12:31:00.000"
    },
    {
        "HIGH": 170.86,
        "LOW": 170.85,
        "OPEN": 170.85,
        "CLOSE": 170.86,
        "VOLUME": 400,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:32:00.000"
    },
    {
        "HIGH": 170.87,
        "LOW": 170.87,
        "OPEN": 170.87,
        "CLOSE": 170.87,
        "VOLUME": 253,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:33:00.000"
    },
    {
        "HIGH": 170.87,
        "LOW": 170.85,
        "OPEN": 170.87,
        "CLOSE": 170.85,
        "VOLUME": 663,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T12:35:00.000"
    },
    {
        "HIGH": 170.84,
        "LOW": 170.84,
        "OPEN": 170.84,
        "CLOSE": 170.84,
        "VOLUME": 103,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:36:00.000"
    },
    {
        "VOLUME": 64,
        "TIMESTAMP": "2015-05-29T12:37:00.000"
    },
    {
        "HIGH": 170.84,
        "LOW": 170.84,
        "OPEN": 170.84,
        "CLOSE": 170.84,
        "VOLUME": 133,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:38:00.000"
    },
    {
        "HIGH": 171,
        "LOW": 170.85,
        "OPEN": 170.85,
        "CLOSE": 170.96,
        "VOLUME": 821,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T12:40:00.000"
    },
    {
        "HIGH": 171.06,
        "LOW": 170.96,
        "OPEN": 171.03,
        "CLOSE": 170.96,
        "VOLUME": 1026,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T12:41:00.000"
    },
    {
        "VOLUME": 5,
        "TIMESTAMP": "2015-05-29T12:42:00.000"
    },
    {
        "VOLUME": 25,
        "TIMESTAMP": "2015-05-29T12:43:00.000"
    },
    {
        "VOLUME": 39,
        "TIMESTAMP": "2015-05-29T12:44:00.000"
    },
    {
        "HIGH": 170.96,
        "LOW": 170.89,
        "OPEN": 170.96,
        "CLOSE": 170.89,
        "VOLUME": 655,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T12:45:00.000"
    },
    {
        "HIGH": 170.87,
        "LOW": 170.85,
        "OPEN": 170.85,
        "CLOSE": 170.86,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T12:46:00.000"
    },
    {
        "HIGH": 170.91,
        "LOW": 170.89,
        "OPEN": 170.9,
        "CLOSE": 170.89,
        "VOLUME": 400,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T12:48:00.000"
    },
    {
        "HIGH": 170.82,
        "LOW": 170.82,
        "OPEN": 170.82,
        "CLOSE": 170.82,
        "VOLUME": 667,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T12:49:00.000"
    },
    {
        "HIGH": 170.81,
        "LOW": 170.79,
        "OPEN": 170.79,
        "CLOSE": 170.81,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T12:50:00.000"
    },
    {
        "HIGH": 170.79,
        "LOW": 170.75,
        "OPEN": 170.75,
        "CLOSE": 170.79,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:51:00.000"
    },
    {
        "HIGH": 170.73,
        "LOW": 170.72,
        "OPEN": 170.73,
        "CLOSE": 170.72,
        "VOLUME": 300,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:52:00.000"
    },
    {
        "HIGH": 170.71,
        "LOW": 170.7,
        "OPEN": 170.7,
        "CLOSE": 170.71,
        "VOLUME": 278,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:53:00.000"
    },
    {
        "HIGH": 170.76,
        "LOW": 170.76,
        "OPEN": 170.76,
        "CLOSE": 170.76,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T12:55:00.000"
    },
    {
        "VOLUME": 1,
        "TIMESTAMP": "2015-05-29T12:57:00.000"
    },
    {
        "HIGH": 170.81,
        "LOW": 170.81,
        "OPEN": 170.81,
        "CLOSE": 170.81,
        "VOLUME": 400,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T12:58:00.000"
    },
    {
        "HIGH": 170.83,
        "LOW": 170.8,
        "OPEN": 170.81,
        "CLOSE": 170.83,
        "VOLUME": 400,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T12:59:00.000"
    },
    {
        "HIGH": 170.82,
        "LOW": 170.79,
        "OPEN": 170.8,
        "CLOSE": 170.82,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:00:00.000"
    },
    {
        "HIGH": 170.82,
        "LOW": 170.82,
        "OPEN": 170.82,
        "CLOSE": 170.82,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:01:00.000"
    },
    {
        "VOLUME": 125,
        "TIMESTAMP": "2015-05-29T13:02:00.000"
    },
    {
        "HIGH": 170.73,
        "LOW": 170.73,
        "OPEN": 170.73,
        "CLOSE": 170.73,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:03:00.000"
    },
    {
        "HIGH": 170.73,
        "LOW": 170.73,
        "OPEN": 170.73,
        "CLOSE": 170.73,
        "VOLUME": 300,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:04:00.000"
    },
    {
        "HIGH": 170.71,
        "LOW": 170.68,
        "OPEN": 170.68,
        "CLOSE": 170.71,
        "VOLUME": 232,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:05:00.000"
    },
    {
        "HIGH": 170.75,
        "LOW": 170.75,
        "OPEN": 170.75,
        "CLOSE": 170.75,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:06:00.000"
    },
    {
        "HIGH": 170.7,
        "LOW": 170.64,
        "OPEN": 170.7,
        "CLOSE": 170.66,
        "VOLUME": 800,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T13:07:00.000"
    },
    {
        "HIGH": 170.62,
        "LOW": 170.6,
        "OPEN": 170.62,
        "CLOSE": 170.6,
        "VOLUME": 409,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:08:00.000"
    },
    {
        "HIGH": 170.62,
        "LOW": 170.62,
        "OPEN": 170.62,
        "CLOSE": 170.62,
        "VOLUME": 201,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:09:00.000"
    },
    {
        "HIGH": 170.67,
        "LOW": 170.64,
        "OPEN": 170.64,
        "CLOSE": 170.67,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:10:00.000"
    },
    {
        "HIGH": 170.68,
        "LOW": 170.64,
        "OPEN": 170.68,
        "CLOSE": 170.66,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:11:00.000"
    },
    {
        "HIGH": 170.64,
        "LOW": 170.64,
        "OPEN": 170.64,
        "CLOSE": 170.64,
        "VOLUME": 400,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:12:00.000"
    },
    {
        "HIGH": 170.65,
        "LOW": 170.65,
        "OPEN": 170.65,
        "CLOSE": 170.65,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:14:00.000"
    },
    {
        "HIGH": 170.62,
        "LOW": 170.55,
        "OPEN": 170.56,
        "CLOSE": 170.62,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T13:15:00.000"
    },
    {
        "HIGH": 170.64,
        "LOW": 170.63,
        "OPEN": 170.64,
        "CLOSE": 170.64,
        "VOLUME": 649,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:16:00.000"
    },
    {
        "HIGH": 170.67,
        "LOW": 170.64,
        "OPEN": 170.64,
        "CLOSE": 170.67,
        "VOLUME": 250,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:17:00.000"
    },
    {
        "HIGH": 170.71,
        "LOW": 170.68,
        "OPEN": 170.68,
        "CLOSE": 170.71,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:18:00.000"
    },
    {
        "HIGH": 170.74,
        "LOW": 170.66,
        "OPEN": 170.7,
        "CLOSE": 170.66,
        "VOLUME": 1390,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T13:21:00.000"
    },
    {
        "HIGH": 170.67,
        "LOW": 170.66,
        "OPEN": 170.67,
        "CLOSE": 170.66,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:22:00.000"
    },
    {
        "HIGH": 170.66,
        "LOW": 170.63,
        "OPEN": 170.65,
        "CLOSE": 170.66,
        "VOLUME": 790,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T13:23:00.000"
    },
    {
        "HIGH": 170.68,
        "LOW": 170.66,
        "OPEN": 170.68,
        "CLOSE": 170.66,
        "VOLUME": 500,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T13:24:00.000"
    },
    {
        "HIGH": 170.63,
        "LOW": 170.63,
        "OPEN": 170.63,
        "CLOSE": 170.63,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:25:00.000"
    },
    {
        "HIGH": 170.685,
        "LOW": 170.685,
        "OPEN": 170.685,
        "CLOSE": 170.685,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:26:00.000"
    },
    {
        "HIGH": 170.69,
        "LOW": 170.67,
        "OPEN": 170.69,
        "CLOSE": 170.67,
        "VOLUME": 541,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:27:00.000"
    },
    {
        "HIGH": 170.72,
        "LOW": 170.71,
        "OPEN": 170.71,
        "CLOSE": 170.72,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:28:00.000"
    },
    {
        "HIGH": 170.74,
        "LOW": 170.74,
        "OPEN": 170.74,
        "CLOSE": 170.74,
        "VOLUME": 161,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:29:00.000"
    },
    {
        "HIGH": 170.71,
        "LOW": 170.69,
        "OPEN": 170.71,
        "CLOSE": 170.69,
        "VOLUME": 600,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:30:00.000"
    },
    {
        "HIGH": 170.77,
        "LOW": 170.72,
        "OPEN": 170.72,
        "CLOSE": 170.77,
        "VOLUME": 380,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:31:00.000"
    },
    {
        "HIGH": 170.79,
        "LOW": 170.78,
        "OPEN": 170.79,
        "CLOSE": 170.78,
        "VOLUME": 295,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:32:00.000"
    },
    {
        "HIGH": 170.73,
        "LOW": 170.69,
        "OPEN": 170.73,
        "CLOSE": 170.69,
        "VOLUME": 300,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:33:00.000"
    },
    {
        "HIGH": 170.72,
        "LOW": 170.68,
        "OPEN": 170.71,
        "CLOSE": 170.7,
        "VOLUME": 800,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T13:34:00.000"
    },
    {
        "HIGH": 170.69,
        "LOW": 170.62,
        "OPEN": 170.69,
        "CLOSE": 170.62,
        "VOLUME": 2838,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T13:35:00.000"
    },
    {
        "HIGH": 170.68,
        "LOW": 170.63,
        "OPEN": 170.67,
        "CLOSE": 170.63,
        "VOLUME": 900,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T13:36:00.000"
    },
    {
        "HIGH": 170.62,
        "LOW": 170.62,
        "OPEN": 170.62,
        "CLOSE": 170.62,
        "VOLUME": 104,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:38:00.000"
    },
    {
        "HIGH": 170.59,
        "LOW": 170.58,
        "OPEN": 170.59,
        "CLOSE": 170.58,
        "VOLUME": 403,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:39:00.000"
    },
    {
        "HIGH": 170.63,
        "LOW": 170.6,
        "OPEN": 170.6,
        "CLOSE": 170.61,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:40:00.000"
    },
    {
        "HIGH": 170.62,
        "LOW": 170.62,
        "OPEN": 170.62,
        "CLOSE": 170.62,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:41:00.000"
    },
    {
        "HIGH": 170.64,
        "LOW": 170.63,
        "OPEN": 170.64,
        "CLOSE": 170.64,
        "VOLUME": 990,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T13:42:00.000"
    },
    {
        "HIGH": 170.67,
        "LOW": 170.67,
        "OPEN": 170.67,
        "CLOSE": 170.67,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:44:00.000"
    },
    {
        "HIGH": 170.74,
        "LOW": 170.67,
        "OPEN": 170.67,
        "CLOSE": 170.74,
        "VOLUME": 800,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T13:45:00.000"
    },
    {
        "HIGH": 170.75,
        "LOW": 170.75,
        "OPEN": 170.75,
        "CLOSE": 170.75,
        "VOLUME": 250,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:46:00.000"
    },
    {
        "HIGH": 170.8,
        "LOW": 170.8,
        "OPEN": 170.8,
        "CLOSE": 170.8,
        "VOLUME": 250,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:47:00.000"
    },
    {
        "HIGH": 170.81,
        "LOW": 170.79,
        "OPEN": 170.79,
        "CLOSE": 170.81,
        "VOLUME": 314,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:48:00.000"
    },
    {
        "HIGH": 170.83,
        "LOW": 170.83,
        "OPEN": 170.83,
        "CLOSE": 170.83,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:49:00.000"
    },
    {
        "HIGH": 170.81,
        "LOW": 170.81,
        "OPEN": 170.81,
        "CLOSE": 170.81,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:50:00.000"
    },
    {
        "HIGH": 170.79,
        "LOW": 170.79,
        "OPEN": 170.79,
        "CLOSE": 170.79,
        "VOLUME": 138,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:52:00.000"
    },
    {
        "HIGH": 170.76,
        "LOW": 170.76,
        "OPEN": 170.76,
        "CLOSE": 170.76,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:53:00.000"
    },
    {
        "HIGH": 170.72,
        "LOW": 170.68,
        "OPEN": 170.72,
        "CLOSE": 170.68,
        "VOLUME": 220,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:54:00.000"
    },
    {
        "HIGH": 170.6,
        "LOW": 170.6,
        "OPEN": 170.6,
        "CLOSE": 170.6,
        "VOLUME": 190,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T13:55:00.000"
    },
    {
        "HIGH": 170.59,
        "LOW": 170.58,
        "OPEN": 170.58,
        "CLOSE": 170.58,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T13:56:00.000"
    },
    {
        "HIGH": 170.58,
        "LOW": 170.53,
        "OPEN": 170.58,
        "CLOSE": 170.53,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T13:57:00.000"
    },
    {
        "HIGH": 170.56,
        "LOW": 170.52,
        "OPEN": 170.56,
        "CLOSE": 170.53,
        "VOLUME": 878,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T13:59:00.000"
    },
    {
        "HIGH": 170.49,
        "LOW": 170.49,
        "OPEN": 170.49,
        "CLOSE": 170.49,
        "VOLUME": 400,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T14:00:00.000"
    },
    {
        "HIGH": 170.48,
        "LOW": 170.48,
        "OPEN": 170.48,
        "CLOSE": 170.48,
        "VOLUME": 500,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T14:01:00.000"
    },
    {
        "HIGH": 170.5,
        "LOW": 170.44,
        "OPEN": 170.44,
        "CLOSE": 170.5,
        "VOLUME": 400,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T14:02:00.000"
    },
    {
        "HIGH": 170.49,
        "LOW": 170.49,
        "OPEN": 170.49,
        "CLOSE": 170.49,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T14:04:00.000"
    },
    {
        "HIGH": 170.47,
        "LOW": 170.46,
        "OPEN": 170.46,
        "CLOSE": 170.47,
        "VOLUME": 413,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T14:05:00.000"
    },
    {
        "HIGH": 170.51,
        "LOW": 170.49,
        "OPEN": 170.49,
        "CLOSE": 170.5,
        "VOLUME": 450,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T14:06:00.000"
    },
    {
        "HIGH": 170.52,
        "LOW": 170.5,
        "OPEN": 170.5,
        "CLOSE": 170.51,
        "VOLUME": 500,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T14:07:00.000"
    },
    {
        "HIGH": 170.48,
        "LOW": 170.46,
        "OPEN": 170.48,
        "CLOSE": 170.46,
        "VOLUME": 400,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T14:08:00.000"
    },
    {
        "HIGH": 170.5,
        "LOW": 170.49,
        "OPEN": 170.49,
        "CLOSE": 170.5,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T14:09:00.000"
    },
    {
        "HIGH": 170.52,
        "LOW": 170.51,
        "OPEN": 170.51,
        "CLOSE": 170.52,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T14:10:00.000"
    },
    {
        "HIGH": 170.43,
        "LOW": 170.42,
        "OPEN": 170.42,
        "CLOSE": 170.43,
        "VOLUME": 475,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T14:11:00.000"
    },
    {
        "HIGH": 170.38,
        "LOW": 170.38,
        "OPEN": 170.38,
        "CLOSE": 170.38,
        "VOLUME": 278,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T14:13:00.000"
    },
    {
        "HIGH": 170.42,
        "LOW": 170.39,
        "OPEN": 170.41,
        "CLOSE": 170.39,
        "VOLUME": 357,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T14:14:00.000"
    },
    {
        "HIGH": 170.45,
        "LOW": 170.41,
        "OPEN": 170.41,
        "CLOSE": 170.45,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T14:15:00.000"
    },
    {
        "HIGH": 170.45,
        "LOW": 170.43,
        "OPEN": 170.45,
        "CLOSE": 170.43,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T14:16:00.000"
    },
    {
        "HIGH": 170.44,
        "LOW": 170.35,
        "OPEN": 170.35,
        "CLOSE": 170.44,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:17:00.000"
    },
    {
        "HIGH": 170.46,
        "LOW": 170.41,
        "OPEN": 170.46,
        "CLOSE": 170.41,
        "VOLUME": 379,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T14:18:00.000"
    },
    {
        "HIGH": 170.47,
        "LOW": 170.47,
        "OPEN": 170.47,
        "CLOSE": 170.47,
        "VOLUME": 100,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T14:19:00.000"
    },
    {
        "HIGH": 170.48,
        "LOW": 170.45,
        "OPEN": 170.47,
        "CLOSE": 170.46,
        "VOLUME": 656,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:20:00.000"
    },
    {
        "HIGH": 170.42,
        "LOW": 170.4,
        "OPEN": 170.42,
        "CLOSE": 170.41,
        "VOLUME": 479,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T14:21:00.000"
    },
    {
        "HIGH": 170.39,
        "LOW": 170.39,
        "OPEN": 170.39,
        "CLOSE": 170.39,
        "VOLUME": 200,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T14:22:00.000"
    },
    {
        "HIGH": 170.38,
        "LOW": 170.365,
        "OPEN": 170.38,
        "CLOSE": 170.38,
        "VOLUME": 400,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T14:23:00.000"
    },
    {
        "HIGH": 170.39,
        "LOW": 170.23,
        "OPEN": 170.39,
        "CLOSE": 170.23,
        "VOLUME": 1274,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-29T14:24:00.000"
    },
    {
        "HIGH": 170.25,
        "LOW": 170.22,
        "OPEN": 170.25,
        "CLOSE": 170.24,
        "VOLUME": 1010,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T14:25:00.000"
    },
    {
        "HIGH": 170.25,
        "LOW": 170.23,
        "OPEN": 170.23,
        "CLOSE": 170.23,
        "VOLUME": 575,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T14:26:00.000"
    },
    {
        "HIGH": 170.28,
        "LOW": 170.23,
        "OPEN": 170.25,
        "CLOSE": 170.27,
        "VOLUME": 1745,
        "COUNT": 14,
        "TIMESTAMP": "2015-05-29T14:27:00.000"
    },
    {
        "HIGH": 170.28,
        "LOW": 170.26,
        "OPEN": 170.27,
        "CLOSE": 170.28,
        "VOLUME": 500,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:28:00.000"
    },
    {
        "HIGH": 170.38,
        "LOW": 170.27,
        "OPEN": 170.295,
        "CLOSE": 170.38,
        "VOLUME": 1188,
        "COUNT": 11,
        "TIMESTAMP": "2015-05-29T14:29:00.000"
    },
    {
        "HIGH": 170.375,
        "LOW": 170.275,
        "OPEN": 170.375,
        "CLOSE": 170.275,
        "VOLUME": 1000,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:30:00.000"
    },
    {
        "HIGH": 170.26,
        "LOW": 170.2,
        "OPEN": 170.21,
        "CLOSE": 170.26,
        "VOLUME": 2388,
        "COUNT": 19,
        "TIMESTAMP": "2015-05-29T14:31:00.000"
    },
    {
        "HIGH": 170.33,
        "LOW": 170.28,
        "OPEN": 170.28,
        "CLOSE": 170.33,
        "VOLUME": 663,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:32:00.000"
    },
    {
        "HIGH": 170.38,
        "LOW": 170.36,
        "OPEN": 170.36,
        "CLOSE": 170.38,
        "VOLUME": 200,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T14:33:00.000"
    },
    {
        "HIGH": 170.385,
        "LOW": 170.34,
        "OPEN": 170.385,
        "CLOSE": 170.35,
        "VOLUME": 1153,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T14:34:00.000"
    },
    {
        "HIGH": 170.38,
        "LOW": 170.33,
        "OPEN": 170.37,
        "CLOSE": 170.33,
        "VOLUME": 1987,
        "COUNT": 16,
        "TIMESTAMP": "2015-05-29T14:35:00.000"
    },
    {
        "HIGH": 170.35,
        "LOW": 170.31,
        "OPEN": 170.31,
        "CLOSE": 170.35,
        "VOLUME": 400,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T14:36:00.000"
    },
    {
        "HIGH": 170.395,
        "LOW": 170.34,
        "OPEN": 170.36,
        "CLOSE": 170.34,
        "VOLUME": 694,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T14:37:00.000"
    },
    {
        "HIGH": 170.32,
        "LOW": 170.32,
        "OPEN": 170.32,
        "CLOSE": 170.32,
        "VOLUME": 171,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T14:38:00.000"
    },
    {
        "HIGH": 170.3,
        "LOW": 170.23,
        "OPEN": 170.3,
        "CLOSE": 170.23,
        "VOLUME": 600,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T14:39:00.000"
    },
    {
        "HIGH": 170.26,
        "LOW": 170.14,
        "OPEN": 170.17,
        "CLOSE": 170.24,
        "VOLUME": 1322,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-29T14:40:00.000"
    },
    {
        "HIGH": 170.23,
        "LOW": 170.12,
        "OPEN": 170.23,
        "CLOSE": 170.14,
        "VOLUME": 1078,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T14:41:00.000"
    },
    {
        "HIGH": 170.14,
        "LOW": 170.085,
        "OPEN": 170.14,
        "CLOSE": 170.1,
        "VOLUME": 800,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:42:00.000"
    },
    {
        "HIGH": 170.19,
        "LOW": 170.14,
        "OPEN": 170.14,
        "CLOSE": 170.165,
        "VOLUME": 976,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T14:43:00.000"
    },
    {
        "HIGH": 170.15,
        "LOW": 170.11,
        "OPEN": 170.11,
        "CLOSE": 170.15,
        "VOLUME": 300,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T14:44:00.000"
    },
    {
        "HIGH": 170.19,
        "LOW": 170.17,
        "OPEN": 170.175,
        "CLOSE": 170.19,
        "VOLUME": 977,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T14:45:00.000"
    },
    {
        "HIGH": 170.16,
        "LOW": 170.12,
        "OPEN": 170.12,
        "CLOSE": 170.16,
        "VOLUME": 716,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:46:00.000"
    },
    {
        "HIGH": 170.13,
        "LOW": 170.03,
        "OPEN": 170.13,
        "CLOSE": 170.03,
        "VOLUME": 1022,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:47:00.000"
    },
    {
        "HIGH": 170.075,
        "LOW": 170.035,
        "OPEN": 170.035,
        "CLOSE": 170.05,
        "VOLUME": 700,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:48:00.000"
    },
    {
        "HIGH": 170.07,
        "LOW": 170.03,
        "OPEN": 170.03,
        "CLOSE": 170.07,
        "VOLUME": 550,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T14:49:00.000"
    },
    {
        "HIGH": 170.05,
        "LOW": 169.95,
        "OPEN": 170.05,
        "CLOSE": 170,
        "VOLUME": 2164,
        "COUNT": 11,
        "TIMESTAMP": "2015-05-29T14:50:00.000"
    },
    {
        "HIGH": 169.98,
        "LOW": 169.9,
        "OPEN": 169.98,
        "CLOSE": 169.9,
        "VOLUME": 1898,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-29T14:51:00.000"
    },
    {
        "HIGH": 169.93,
        "LOW": 169.91,
        "OPEN": 169.91,
        "CLOSE": 169.93,
        "VOLUME": 710,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T14:52:00.000"
    },
    {
        "HIGH": 169.94,
        "LOW": 169.89,
        "OPEN": 169.94,
        "CLOSE": 169.89,
        "VOLUME": 700,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T14:53:00.000"
    },
    {
        "HIGH": 169.92,
        "LOW": 169.89,
        "OPEN": 169.9,
        "CLOSE": 169.92,
        "VOLUME": 1860,
        "COUNT": 14,
        "TIMESTAMP": "2015-05-29T14:54:00.000"
    },
    {
        "HIGH": 169.99,
        "LOW": 169.95,
        "OPEN": 169.95,
        "CLOSE": 169.99,
        "VOLUME": 1165,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T14:55:00.000"
    },
    {
        "HIGH": 170.02,
        "LOW": 169.99,
        "OPEN": 170,
        "CLOSE": 170.01,
        "VOLUME": 1011,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T14:56:00.000"
    },
    {
        "HIGH": 170.08,
        "LOW": 169.995,
        "OPEN": 169.995,
        "CLOSE": 170.08,
        "VOLUME": 800,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T14:57:00.000"
    },
    {
        "HIGH": 170.075,
        "LOW": 170.04,
        "OPEN": 170.075,
        "CLOSE": 170.07,
        "VOLUME": 598,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T14:58:00.000"
    },
    {
        "HIGH": 170.08,
        "LOW": 170.06,
        "OPEN": 170.08,
        "CLOSE": 170.08,
        "VOLUME": 800,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T14:59:00.000"
    },
    {
        "HIGH": 170.08,
        "LOW": 170.02,
        "OPEN": 170.05,
        "CLOSE": 170.03,
        "VOLUME": 1151,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-29T15:00:00.000"
    },
    {
        "HIGH": 170.07,
        "LOW": 170.01,
        "OPEN": 170.05,
        "CLOSE": 170.05,
        "VOLUME": 1394,
        "COUNT": 11,
        "TIMESTAMP": "2015-05-29T15:01:00.000"
    },
    {
        "HIGH": 170.045,
        "LOW": 169.96,
        "OPEN": 170.045,
        "CLOSE": 169.96,
        "VOLUME": 871,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T15:02:00.000"
    },
    {
        "HIGH": 170.01,
        "LOW": 169.94,
        "OPEN": 169.94,
        "CLOSE": 170.01,
        "VOLUME": 606,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T15:03:00.000"
    },
    {
        "HIGH": 170.06,
        "LOW": 170.045,
        "OPEN": 170.045,
        "CLOSE": 170.06,
        "VOLUME": 533,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T15:04:00.000"
    },
    {
        "HIGH": 170.07,
        "LOW": 169.96,
        "OPEN": 170.07,
        "CLOSE": 169.97,
        "VOLUME": 1517,
        "COUNT": 9,
        "TIMESTAMP": "2015-05-29T15:05:00.000"
    },
    {
        "HIGH": 169.95,
        "LOW": 169.88,
        "OPEN": 169.95,
        "CLOSE": 169.91,
        "VOLUME": 1399,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T15:06:00.000"
    },
    {
        "HIGH": 169.95,
        "LOW": 169.88,
        "OPEN": 169.92,
        "CLOSE": 169.95,
        "VOLUME": 1003,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T15:07:00.000"
    },
    {
        "HIGH": 170.13,
        "LOW": 169.95,
        "OPEN": 169.95,
        "CLOSE": 170.13,
        "VOLUME": 2159,
        "COUNT": 18,
        "TIMESTAMP": "2015-05-29T15:08:00.000"
    },
    {
        "HIGH": 170.19,
        "LOW": 170.11,
        "OPEN": 170.12,
        "CLOSE": 170.19,
        "VOLUME": 1911,
        "COUNT": 15,
        "TIMESTAMP": "2015-05-29T15:09:00.000"
    },
    {
        "HIGH": 170.19,
        "LOW": 170.16,
        "OPEN": 170.19,
        "CLOSE": 170.16,
        "VOLUME": 800,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T15:10:00.000"
    },
    {
        "HIGH": 170.285,
        "LOW": 170.17,
        "OPEN": 170.205,
        "CLOSE": 170.25,
        "VOLUME": 866,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T15:11:00.000"
    },
    {
        "HIGH": 170.27,
        "LOW": 170.24,
        "OPEN": 170.24,
        "CLOSE": 170.25,
        "VOLUME": 456,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T15:12:00.000"
    },
    {
        "HIGH": 170.22,
        "LOW": 170.22,
        "OPEN": 170.22,
        "CLOSE": 170.22,
        "VOLUME": 204,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T15:13:00.000"
    },
    {
        "HIGH": 170.28,
        "LOW": 170.18,
        "OPEN": 170.19,
        "CLOSE": 170.25,
        "VOLUME": 1218,
        "COUNT": 8,
        "TIMESTAMP": "2015-05-29T15:14:00.000"
    },
    {
        "HIGH": 170.22,
        "LOW": 170.19,
        "OPEN": 170.22,
        "CLOSE": 170.21,
        "VOLUME": 658,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T15:15:00.000"
    },
    {
        "HIGH": 170.22,
        "LOW": 170.19,
        "OPEN": 170.21,
        "CLOSE": 170.19,
        "VOLUME": 1096,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T15:16:00.000"
    },
    {
        "HIGH": 170.18,
        "LOW": 170.15,
        "OPEN": 170.15,
        "CLOSE": 170.18,
        "VOLUME": 855,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T15:17:00.000"
    },
    {
        "HIGH": 170.11,
        "LOW": 170.06,
        "OPEN": 170.11,
        "CLOSE": 170.06,
        "VOLUME": 276,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T15:18:00.000"
    },
    {
        "HIGH": 170.13,
        "LOW": 170.09,
        "OPEN": 170.09,
        "CLOSE": 170.11,
        "VOLUME": 307,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T15:19:00.000"
    },
    {
        "HIGH": 170.09,
        "LOW": 170.08,
        "OPEN": 170.09,
        "CLOSE": 170.08,
        "VOLUME": 308,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T15:20:00.000"
    },
    {
        "HIGH": 170.13,
        "LOW": 170.12,
        "OPEN": 170.12,
        "CLOSE": 170.13,
        "VOLUME": 827,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T15:21:00.000"
    },
    {
        "HIGH": 170.13,
        "LOW": 170.09,
        "OPEN": 170.13,
        "CLOSE": 170.09,
        "VOLUME": 511,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T15:22:00.000"
    },
    {
        "HIGH": 170.15,
        "LOW": 170.08,
        "OPEN": 170.08,
        "CLOSE": 170.15,
        "VOLUME": 805,
        "COUNT": 7,
        "TIMESTAMP": "2015-05-29T15:23:00.000"
    },
    {
        "HIGH": 170.2,
        "LOW": 170.15,
        "OPEN": 170.15,
        "CLOSE": 170.16,
        "VOLUME": 1292,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-29T15:24:00.000"
    },
    {
        "HIGH": 170.21,
        "LOW": 170.12,
        "OPEN": 170.15,
        "CLOSE": 170.19,
        "VOLUME": 680,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T15:25:00.000"
    },
    {
        "HIGH": 170.28,
        "LOW": 170.15,
        "OPEN": 170.25,
        "CLOSE": 170.17,
        "VOLUME": 1800,
        "COUNT": 14,
        "TIMESTAMP": "2015-05-29T15:26:00.000"
    },
    {
        "HIGH": 170.16,
        "LOW": 170.13,
        "OPEN": 170.14,
        "CLOSE": 170.16,
        "VOLUME": 789,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T15:27:00.000"
    },
    {
        "HIGH": 170.17,
        "LOW": 170.14,
        "OPEN": 170.17,
        "CLOSE": 170.15,
        "VOLUME": 609,
        "COUNT": 5,
        "TIMESTAMP": "2015-05-29T15:28:00.000"
    },
    {
        "HIGH": 170.16,
        "LOW": 170.12,
        "OPEN": 170.14,
        "CLOSE": 170.12,
        "VOLUME": 435,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T15:29:00.000"
    },
    {
        "HIGH": 170.13,
        "LOW": 170.11,
        "OPEN": 170.11,
        "CLOSE": 170.13,
        "VOLUME": 323,
        "COUNT": 2,
        "TIMESTAMP": "2015-05-29T15:30:00.000"
    },
    {
        "HIGH": 170.4,
        "LOW": 170.25,
        "OPEN": 170.25,
        "CLOSE": 170.32,
        "VOLUME": 1475,
        "COUNT": 11,
        "TIMESTAMP": "2015-05-29T15:31:00.000"
    },
    {
        "HIGH": 170.33,
        "LOW": 170.2,
        "OPEN": 170.32,
        "CLOSE": 170.2,
        "VOLUME": 1332,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-29T15:32:00.000"
    },
    {
        "HIGH": 170.16,
        "LOW": 170.12,
        "OPEN": 170.14,
        "CLOSE": 170.12,
        "VOLUME": 533,
        "COUNT": 3,
        "TIMESTAMP": "2015-05-29T15:33:00.000"
    },
    {
        "HIGH": 170.18,
        "LOW": 170.13,
        "OPEN": 170.13,
        "CLOSE": 170.14,
        "VOLUME": 724,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T15:34:00.000"
    },
    {
        "HIGH": 170.19,
        "LOW": 170.14,
        "OPEN": 170.14,
        "CLOSE": 170.18,
        "VOLUME": 815,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T15:35:00.000"
    },
    {
        "HIGH": 170.25,
        "LOW": 170.15,
        "OPEN": 170.16,
        "CLOSE": 170.23,
        "VOLUME": 1522,
        "COUNT": 12,
        "TIMESTAMP": "2015-05-29T15:36:00.000"
    },
    {
        "HIGH": 170.21,
        "LOW": 170.18,
        "OPEN": 170.21,
        "CLOSE": 170.2,
        "VOLUME": 510,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T15:37:00.000"
    },
    {
        "HIGH": 170.21,
        "LOW": 170.2,
        "OPEN": 170.2,
        "CLOSE": 170.2,
        "VOLUME": 808,
        "COUNT": 6,
        "TIMESTAMP": "2015-05-29T15:38:00.000"
    },
    {
        "HIGH": 170.18,
        "LOW": 170.07,
        "OPEN": 170.17,
        "CLOSE": 170.18,
        "VOLUME": 1147,
        "COUNT": 10,
        "TIMESTAMP": "2015-05-29T15:39:00.000"
    },
    {
        "HIGH": 170.16,
        "LOW": 170.1,
        "OPEN": 170.11,
        "CLOSE": 170.16,
        "VOLUME": 522,
        "COUNT": 4,
        "TIMESTAMP": "2015-05-29T15:40:00.000"
    },
    {
        "HIGH": 170.25,
        "LOW": 170.18,
        "OPEN": 170.19,
        "CLOSE": 170.25,
        "VOLUME": 1478,
        "COUNT": 13,
        "TIMESTAMP": "2015-05-29T15:41:00.000"
    },
    {
        "HIGH": 170.37,
        "LOW": 170.23,
        "OPEN": 170.25,
        "CLOSE": 170.35,
        "VOLUME": 2935,
        "COUNT": 15,
        "TIMESTAMP": "2015-05-29T15:42:00.000"
    },
    {
        "HIGH": 170.36,
        "LOW": 170.24,
        "OPEN": 170.36,
        "CLOSE": 170.26,
        "VOLUME": 1471,
        "COUNT": 13,
        "TIMESTAMP": "2015-05-29T15:43:00.000"
    },
    {
        "HIGH": 170.3,
        "LOW": 170.22,
        "OPEN": 170.28,
        "CLOSE": 170.27,
        "VOLUME": 1812,
        "COUNT": 15,
        "TIMESTAMP": "2015-05-29T15:44:00.000"
    },
    {
        "HIGH": 170.25,
        "LOW": 170.2,
        "OPEN": 170.23,
        "CLOSE": 170.2,
        "VOLUME": 1530,
        "COUNT": 11,
        "TIMESTAMP": "2015-05-29T15:45:00.000"
    },
    {
        "HIGH": 170.22,
        "LOW": 170.1,
        "OPEN": 170.2,
        "CLOSE": 170.11,
        "VOLUME": 6269,
        "COUNT": 34,
        "TIMESTAMP": "2015-05-29T15:46:00.000"
    },
    {
        "HIGH": 170.15,
        "LOW": 170.07,
        "OPEN": 170.11,
        "CLOSE": 170.07,
        "VOLUME": 2403,
        "COUNT": 19,
        "TIMESTAMP": "2015-05-29T15:47:00.000"
    },
    {
        "HIGH": 170.09,
        "LOW": 170.04,
        "OPEN": 170.08,
        "CLOSE": 170.07,
        "VOLUME": 2199,
        "COUNT": 18,
        "TIMESTAMP": "2015-05-29T15:48:00.000"
    },
    {
        "HIGH": 170.07,
        "LOW": 169.98,
        "OPEN": 170.07,
        "CLOSE": 169.98,
        "VOLUME": 2286,
        "COUNT": 19,
        "TIMESTAMP": "2015-05-29T15:49:00.000"
    },
    {
        "HIGH": 169.99,
        "LOW": 169.94,
        "OPEN": 169.98,
        "CLOSE": 169.94,
        "VOLUME": 3943,
        "COUNT": 30,
        "TIMESTAMP": "2015-05-29T15:50:00.000"
    },
    {
        "HIGH": 169.97,
        "LOW": 169.92,
        "OPEN": 169.97,
        "CLOSE": 169.93,
        "VOLUME": 3810,
        "COUNT": 22,
        "TIMESTAMP": "2015-05-29T15:51:00.000"
    },
    {
        "HIGH": 169.95,
        "LOW": 169.89,
        "OPEN": 169.94,
        "CLOSE": 169.89,
        "VOLUME": 2889,
        "COUNT": 19,
        "TIMESTAMP": "2015-05-29T15:52:00.000"
    },
    {
        "HIGH": 169.89,
        "LOW": 169.85,
        "OPEN": 169.89,
        "CLOSE": 169.85,
        "VOLUME": 2019,
        "COUNT": 16,
        "TIMESTAMP": "2015-05-29T15:53:00.000"
    },
    {
        "HIGH": 169.87,
        "LOW": 169.8,
        "OPEN": 169.84,
        "CLOSE": 169.8,
        "VOLUME": 2963,
        "COUNT": 24,
        "TIMESTAMP": "2015-05-29T15:54:00.000"
    },
    {
        "HIGH": 169.92,
        "LOW": 169.78,
        "OPEN": 169.78,
        "CLOSE": 169.92,
        "VOLUME": 3585,
        "COUNT": 17,
        "TIMESTAMP": "2015-05-29T15:55:00.000"
    },
    {
        "HIGH": 170,
        "LOW": 169.84,
        "OPEN": 169.91,
        "CLOSE": 169.91,
        "VOLUME": 13636,
        "COUNT": 74,
        "TIMESTAMP": "2015-05-29T15:56:00.000"
    },
    {
        "HIGH": 169.91,
        "LOW": 169.75,
        "OPEN": 169.91,
        "CLOSE": 169.82,
        "VOLUME": 9338,
        "COUNT": 49,
        "TIMESTAMP": "2015-05-29T15:57:00.000"
    },
    {
        "HIGH": 169.85,
        "LOW": 169.79,
        "OPEN": 169.84,
        "CLOSE": 169.81,
        "VOLUME": 9897,
        "COUNT": 58,
        "TIMESTAMP": "2015-05-29T15:58:00.000"
    },
    {
        "HIGH": 169.93,
        "LOW": 169.81,
        "OPEN": 169.84,
        "CLOSE": 169.87,
        "VOLUME": 12189,
        "COUNT": 54,
        "TIMESTAMP": "2015-05-29T15:59:00.000"
    },
    {
        "HIGH": 169.97,
        "LOW": 169.66,
        "OPEN": 169.86,
        "CLOSE": 169.67,
        "VOLUME": 92091,
        "COUNT": 234,
        "TIMESTAMP": "2015-05-29T16:00:00.000"
    },
    {
        "HIGH": 169.65,
        "LOW": 169.65,
        "OPEN": 169.65,
        "CLOSE": 169.65,
        "VOLUME": 834581,
        "COUNT": 1,
        "TIMESTAMP": "2015-05-29T16:02:00.000"
    }
  ];

  module.data = data;

  return module;

}(module || {}));
