/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

//
// These are a little ugly.
// The C++ style guide requires 80-column lines.
// cpplint.py requires 2-space indentation.

#include "strings/ascii_ctype.h"

// # Table generated by this Python code (bit 0x02 is currently unused):
// def Hex2(n):
//   return '0x' + hex(n/16)[2:] + hex(n%16)[2:]
// def IsPunct(ch):
//   return (ord(ch) >= 32 and ord(ch) < 127 and
//           not ch.isspace() and not ch.isalnum())
// def IsBlank(ch):
//   return ch in ' \t'
// def IsCntrl(ch):
//   return ord(ch) < 32 or ord(ch) == 127
// def IsXDigit(ch):
//   return ch.isdigit() or ch.lower() in 'abcdef'
// for i in range(128):
//   ch = chr(i)
//   mask = ((ch.isalpha() and 0x01 or 0) |
//           (ch.isalnum() and 0x04 or 0) |
//           (ch.isspace() and 0x08 or 0) |
//           (IsPunct(ch) and 0x10 or 0) |
//           (IsBlank(ch) and 0x20 or 0) |
//           (IsCntrl(ch) and 0x40 or 0) |
//           (IsXDigit(ch) and 0x80 or 0))
//   print Hex2(mask) + ',',
//   if i % 16 == 7:
//     print ' //', Hex2(i & 0x78)
//   elif i % 16 == 15:
//     print
const unsigned char kAsciiPropertyBits[256] = {
    0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40,  // 0x00
    0x40, 0x68, 0x48, 0x48, 0x48, 0x48, 0x40, 0x40,
    0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40,  // 0x10
    0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40,
    0x28, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10,  // 0x20
    0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10,
    0x84, 0x84, 0x84, 0x84, 0x84, 0x84, 0x84, 0x84,  // 0x30
    0x84, 0x84, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10,
    0x10, 0x85, 0x85, 0x85, 0x85, 0x85, 0x85, 0x05,  // 0x40
    0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,
    0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,  // 0x50
    0x05, 0x05, 0x05, 0x10, 0x10, 0x10, 0x10, 0x10,
    0x10, 0x85, 0x85, 0x85, 0x85, 0x85, 0x85, 0x05,  // 0x60
    0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,
    0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,  // 0x70
    0x05, 0x05, 0x05, 0x10, 0x10, 0x10, 0x10, 0x40,
};

const char kAsciiToLower[256] = {
    '\x00', '\x01', '\x02', '\x03', '\x04', '\x05', '\x06', '\x07', '\x08',
    '\x09', '\x0a', '\x0b', '\x0c', '\x0d', '\x0e', '\x0f', '\x10', '\x11',
    '\x12', '\x13', '\x14', '\x15', '\x16', '\x17', '\x18', '\x19', '\x1a',
    '\x1b', '\x1c', '\x1d', '\x1e', '\x1f', '\x20', '\x21', '\x22', '\x23',
    '\x24', '\x25', '\x26', '\x27', '\x28', '\x29', '\x2a', '\x2b', '\x2c',
    '\x2d', '\x2e', '\x2f', '\x30', '\x31', '\x32', '\x33', '\x34', '\x35',
    '\x36', '\x37', '\x38', '\x39', '\x3a', '\x3b', '\x3c', '\x3d', '\x3e',
    '\x3f', '\x40', 'a',    'b',    'c',    'd',    'e',    'f',    'g',
    'h',    'i',    'j',    'k',    'l',    'm',    'n',    'o',    'p',
    'q',    'r',    's',    't',    'u',    'v',    'w',    'x',    'y',
    'z',    '\x5b', '\x5c', '\x5d', '\x5e', '\x5f', '\x60', '\x61', '\x62',
    '\x63', '\x64', '\x65', '\x66', '\x67', '\x68', '\x69', '\x6a', '\x6b',
    '\x6c', '\x6d', '\x6e', '\x6f', '\x70', '\x71', '\x72', '\x73', '\x74',
    '\x75', '\x76', '\x77', '\x78', '\x79', '\x7a', '\x7b', '\x7c', '\x7d',
    '\x7e', '\x7f', '\x80', '\x81', '\x82', '\x83', '\x84', '\x85', '\x86',
    '\x87', '\x88', '\x89', '\x8a', '\x8b', '\x8c', '\x8d', '\x8e', '\x8f',
    '\x90', '\x91', '\x92', '\x93', '\x94', '\x95', '\x96', '\x97', '\x98',
    '\x99', '\x9a', '\x9b', '\x9c', '\x9d', '\x9e', '\x9f', '\xa0', '\xa1',
    '\xa2', '\xa3', '\xa4', '\xa5', '\xa6', '\xa7', '\xa8', '\xa9', '\xaa',
    '\xab', '\xac', '\xad', '\xae', '\xaf', '\xb0', '\xb1', '\xb2', '\xb3',
    '\xb4', '\xb5', '\xb6', '\xb7', '\xb8', '\xb9', '\xba', '\xbb', '\xbc',
    '\xbd', '\xbe', '\xbf', '\xc0', '\xc1', '\xc2', '\xc3', '\xc4', '\xc5',
    '\xc6', '\xc7', '\xc8', '\xc9', '\xca', '\xcb', '\xcc', '\xcd', '\xce',
    '\xcf', '\xd0', '\xd1', '\xd2', '\xd3', '\xd4', '\xd5', '\xd6', '\xd7',
    '\xd8', '\xd9', '\xda', '\xdb', '\xdc', '\xdd', '\xde', '\xdf', '\xe0',
    '\xe1', '\xe2', '\xe3', '\xe4', '\xe5', '\xe6', '\xe7', '\xe8', '\xe9',
    '\xea', '\xeb', '\xec', '\xed', '\xee', '\xef', '\xf0', '\xf1', '\xf2',
    '\xf3', '\xf4', '\xf5', '\xf6', '\xf7', '\xf8', '\xf9', '\xfa', '\xfb',
    '\xfc', '\xfd', '\xfe', '\xff',
};

const char kAsciiToUpper[256] = {
    '\x00', '\x01', '\x02', '\x03', '\x04', '\x05', '\x06', '\x07', '\x08',
    '\x09', '\x0a', '\x0b', '\x0c', '\x0d', '\x0e', '\x0f', '\x10', '\x11',
    '\x12', '\x13', '\x14', '\x15', '\x16', '\x17', '\x18', '\x19', '\x1a',
    '\x1b', '\x1c', '\x1d', '\x1e', '\x1f', '\x20', '\x21', '\x22', '\x23',
    '\x24', '\x25', '\x26', '\x27', '\x28', '\x29', '\x2a', '\x2b', '\x2c',
    '\x2d', '\x2e', '\x2f', '\x30', '\x31', '\x32', '\x33', '\x34', '\x35',
    '\x36', '\x37', '\x38', '\x39', '\x3a', '\x3b', '\x3c', '\x3d', '\x3e',
    '\x3f', '\x40', '\x41', '\x42', '\x43', '\x44', '\x45', '\x46', '\x47',
    '\x48', '\x49', '\x4a', '\x4b', '\x4c', '\x4d', '\x4e', '\x4f', '\x50',
    '\x51', '\x52', '\x53', '\x54', '\x55', '\x56', '\x57', '\x58', '\x59',
    '\x5a', '\x5b', '\x5c', '\x5d', '\x5e', '\x5f', '\x60', 'A',    'B',
    'C',    'D',    'E',    'F',    'G',    'H',    'I',    'J',    'K',
    'L',    'M',    'N',    'O',    'P',    'Q',    'R',    'S',    'T',
    'U',    'V',    'W',    'X',    'Y',    'Z',    '\x7b', '\x7c', '\x7d',
    '\x7e', '\x7f', '\x80', '\x81', '\x82', '\x83', '\x84', '\x85', '\x86',
    '\x87', '\x88', '\x89', '\x8a', '\x8b', '\x8c', '\x8d', '\x8e', '\x8f',
    '\x90', '\x91', '\x92', '\x93', '\x94', '\x95', '\x96', '\x97', '\x98',
    '\x99', '\x9a', '\x9b', '\x9c', '\x9d', '\x9e', '\x9f', '\xa0', '\xa1',
    '\xa2', '\xa3', '\xa4', '\xa5', '\xa6', '\xa7', '\xa8', '\xa9', '\xaa',
    '\xab', '\xac', '\xad', '\xae', '\xaf', '\xb0', '\xb1', '\xb2', '\xb3',
    '\xb4', '\xb5', '\xb6', '\xb7', '\xb8', '\xb9', '\xba', '\xbb', '\xbc',
    '\xbd', '\xbe', '\xbf', '\xc0', '\xc1', '\xc2', '\xc3', '\xc4', '\xc5',
    '\xc6', '\xc7', '\xc8', '\xc9', '\xca', '\xcb', '\xcc', '\xcd', '\xce',
    '\xcf', '\xd0', '\xd1', '\xd2', '\xd3', '\xd4', '\xd5', '\xd6', '\xd7',
    '\xd8', '\xd9', '\xda', '\xdb', '\xdc', '\xdd', '\xde', '\xdf', '\xe0',
    '\xe1', '\xe2', '\xe3', '\xe4', '\xe5', '\xe6', '\xe7', '\xe8', '\xe9',
    '\xea', '\xeb', '\xec', '\xed', '\xee', '\xef', '\xf0', '\xf1', '\xf2',
    '\xf3', '\xf4', '\xf5', '\xf6', '\xf7', '\xf8', '\xf9', '\xfa', '\xfb',
    '\xfc', '\xfd', '\xfe', '\xff',
};
