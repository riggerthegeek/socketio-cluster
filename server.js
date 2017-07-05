/**
 * server
 */

/* Node modules */
const cluster = require('cluster');
const http = require('http');

/* Third-party modules */
const socketIoRedis = require('socket.io-redis');
const redis = require('redis');
const socketio = require('socket.io');

/* Files */
