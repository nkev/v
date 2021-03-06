// V_COMMIT_HASH 2943bdc
// V_CURRENT_COMMIT_HASH ad5deef
// Generated by the V compiler

"use strict";

/** @namespace builtin */
const builtin = (function () {
	/**
	 * @function
	 * @param {any} s
	 * @returns {void}
	*/
	function println(s) {
		console.log(s);
	}
	
	/**
	 * @function
	 * @param {any} s
	 * @returns {void}
	*/
	function print(s) {
		process.stdout.write(s);
	}

	/* module exports */
	return {
		println,
		print,
	};
})();

/** @namespace main */
const main = (function () {
	/**
	 * @function
	 * @returns {void}
	*/
	function clear() {
		console.clear();
	}
	
	/** @constant {number} */
	const w = 30;
	/** @constant {number} */
	const h = 30;
	
	/**
	 * @function
	 * @param {boolean[][]} game
	 * @param {number} x
	 * @param {number} y
	 * @returns {boolean}
	*/
	function get(game, x, y) {
		if (y < 0 || x < 0) {
			return false;
		}
		
		if (y >= h || x >= w) {
			return false;
		}
		
		return game[y][x];
	}
	
	/**
	 * @function
	 * @param {boolean[][]} game
	 * @param {number} x
	 * @param {number} y
	 * @returns {number}
	*/
	function neighbours(game, x, y) {
		/** @type {number} */
		let count = 0;
		if (get(game, x - 1, y - 1)) {
			count++;
		}
		
		if (get(game, x, y - 1)) {
			count++;
		}
		
		if (get(game, x + 1, y - 1)) {
			count++;
		}
		
		if (get(game, x - 1, y)) {
			count++;
		}
		
		if (get(game, x + 1, y)) {
			count++;
		}
		
		if (get(game, x - 1, y + 1)) {
			count++;
		}
		
		if (get(game, x, y + 1)) {
			count++;
		}
		
		if (get(game, x + 1, y + 1)) {
			count++;
		}
		
		return count;
	}
	
	/**
	 * @function
	 * @param {boolean[][]} game
	 * @returns {boolean[][]}
	*/
	function step(game) {
		/** @type {boolean[][]} */
		let new_game = [[]];
		for (let y = 0; y < game.length; ++y) {
			let row = game[y];
			/** @type {boolean[]} */
			let new_row = [];
			new_game[y] = new_row;
			for (let x = 0; x < row.length; ++x) {
				let cell = row[x];
				/** @type {number} */
				const count = neighbours(game, x, y);
				new_row[x] = cell && count === 2 || count === 3;
			}
			
		}
		
		return new_game;
	}
	
	/**
	 * @function
	 * @param {boolean[]} row
	 * @returns {string}
	*/
	function row_str(row) {
		/** @type {string} */
		let str = "";
		for (let _tmp1 = 0; _tmp1 < row.length; ++_tmp1) {
			let cell = row[_tmp1];
			if (cell) {
				str += "◼ ";
			} else {
				str += "◻ ";
			}
			
		}
		
		return str;
	}
	
	/**
	 * @function
	 * @param {boolean[][]} game
	 * @returns {void}
	*/
	function show(game) {
		clear();
		for (let _tmp2 = 0; _tmp2 < game.length; ++_tmp2) {
			let row = game[_tmp2];
			builtin.println(row_str(row));
		}
		
	}
	
	/* program entry point */
	(function() {
		/** @type {boolean[][]} */
		let game = [[]];
		for (let y = 0; y < h; ++y) {
			/** @type {boolean[]} */
			let row = [];
			for (let x = 0; x < w; ++x) {
				row[x] = false;
			}
			
			game[y] = row;
		}
		
		game[11][15] = true;
		game[11][16] = true;
		game[12][16] = true;
		game[10][21] = true;
		game[12][20] = true;
		game[12][21] = true;
		game[12][22] = true;
		setInterval(function () {
			show(game);
			game = step(game);
		}, 500);
	})();

	/* module exports */
	return {};
})();


