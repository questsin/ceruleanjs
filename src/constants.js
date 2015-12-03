'use strict';

const os = require('os');

/*
 * Constant generators
 */
function fileDistance() {

}

function squareDistance() {

}

function knightIncrement() {

}

function queenIncrement() {

}

/*
 * Constants
 */
const WHITE = 0;
const BLACK = 1;
const WIDTH = 15;
const HEIGHT = 12;
const FEN_BOARD_REGEX = /^\s*([rnbqkpRNBQKP1-8]+\/){7}([rnbqkpRNBQKP1-8]+)\s[bw]\s(-|K?Q?k?q?)\s(-|[a-h‌​][36])/;
const MOVE_REGEX = /^[a-h][1-8][a-h][1-8][bnrq]?$/;
const FILE_DISTANCE = fileDistance();
const SQUARE_DISTANCE = squareDistance();
const QUEEN_INCREMENT = queenIncrement();
const KNIGHT_INCREMENT = knightIncrement();
const JUST_PIECE = 126; // 1111110
const CASTLING_W_K = 1;
const CASTLING_W_Q = 2;
const CASTLING_B_K = 4;
const CASTLING_B_Q = 8;
const CASTLING = {
    K: 1,
    Q: 2,
    k: 4,
    q: 8
};

const PIECE_MAP = {
    'p': 2,
    'n': 4,
    'b': 8,
    'r': 16,
    'q': 32,
    'k': 64,
    'empty': 128
};

const INVERSE_PIECE_MAP = {
    2: 'p',
    4: 'n',
    8: 'b',
    16: 'r',
    32: 'q',
    64: 'k'
};


const PIECE_DISPLAY_MAP = os.platform() !== 'win32' ? {
    2: '♟',
    4: '♞',
    8: '♝',
    16: '♜',
    32: '♛',
    64: '♚',
    128: ' '
} : {
    2: 'p',
    4: 'n',
    8: 'b',
    16: 'r',
    32: 'q',
    64: 'k',
    128: ' '
};

const DELTA_KNIGHT = [
    -31,
    -29,
    -17,
    -13,
    13,
    17,
    29,
    31
];

const DELTA_KING = [
    -16,
    -15,
    -14,
    -1,
    1,
    14,
    15,
    16
];

const DELTA_BISHOP = [
    -16,
    -14,
    14,
    16
];

const DELTA_ROOK = [
    -15,
    -1,
    1,
    15
];

const CASTLING_INDEX = [
    [CASTLING.K, 39],
    [CASTLING.Q, 35],
    [CASTLING.k, 144],
    [CASTLING.q, 140]
];

const CASTLING_MAP = {
    39: 37,
    35: 37,
    144: 142,
    140: 142
};

const CASTLING_ROOK_MAP = {
    39: 40,
    35: 33,
    144: 145,
    140: 138
};

const DELTA_MAP = [
    [DELTA_BISHOP, PIECE_MAP.b],
    [DELTA_ROOK, PIECE_MAP.r],
    [DELTA_KNIGHT, PIECE_MAP.n],
    [DELTA_KING, PIECE_MAP.k]
];

module.exports = {
    WHITE,
    BLACK,
    WIDTH,
    HEIGHT,
    FEN_BOARD_REGEX,
    MOVE_REGEX,
    FILE_DISTANCE,
    SQUARE_DISTANCE,
    QUEEN_INCREMENT,
    KNIGHT_INCREMENT,
    PIECE_MAP,
    JUST_PIECE,
    INVERSE_PIECE_MAP,
    PIECE_DISPLAY_MAP,
    CASTLING,
    CASTLING_W_K,
    CASTLING_W_Q,
    CASTLING_B_K,
    CASTLING_B_Q,
    CASTLING_MAP,
    CASTLING_ROOK_MAP,
    DELTA_KNIGHT,
    DELTA_KING,
    DELTA_BISHOP,
    DELTA_ROOK,
    CASTLING_INDEX,
    DELTA_MAP
};