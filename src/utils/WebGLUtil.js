(function(Proton, undefined) {

	/**
     * @namespace
     * @memberof! Proton#
     * @alias Proton.WebGLUtil
     */
	var WebGLUtil = WebGLUtil || {

		/**
         * @memberof Proton#Proton.WebGLUtil
         * @method ipot
         *
         * @todo add description
         * @todo add length description
         *
         * @param {Number} length
         *
         * @return {Boolean}
         */
		ipot : function(length) {
			return (length & (length - 1)) == 0;
		},

		/**
         * @memberof Proton#Proton.WebGLUtil
         * @method nhpot
         *
         * @todo add description
         * @todo add length description
         *
         * @param {Number} length
         *
         * @return {Number}
         */
		nhpot : function(length) {--length;
			for (var i = 1; i < 32; i <<= 1) {
				length = length | length >> i;
			}
			return length + 1;
		},

		/**
         * @memberof Proton#Proton.WebGLUtil
         * @method makeTranslation
         *
         * @todo add description
         * @todo add tx, ty description
         * @todo add return description
         *
         * @param {Number} tx either 0 or 1
         * @param {Number} ty either 0 or 1
         *
         * @return {Object}
         */
		makeTranslation : function(tx, ty) {
			return [1, 0, 0, 0, 1, 0, tx, ty, 1];
		},

		/**
         * @memberof Proton#Proton.WebGLUtil
         * @method makeRotation
         *
         * @todo add description
         * @todo add return description
         *
         * @param {Number} angleInRadians
         *
         * @return {Object}
         */
		makeRotation : function(angleInRadians) {
			var c = Math.cos(angleInRadians);
			var s = Math.sin(angleInRadians);
			return [c, -s, 0, s, c, 0, 0, 0, 1];
		},

		/**
         * @memberof Proton#Proton.WebGLUtil
         * @method makeScale
         *
         * @todo add description
         * @todo add tx, ty description
         * @todo add return description
         *
         * @param {Number} sx either 0 or 1
         * @param {Number} sy either 0 or 1
         *
         * @return {Object}
         */
		makeScale : function(sx, sy) {
			return [sx, 0, 0, 0, sy, 0, 0, 0, 1];
		},

		/**
         * @memberof Proton#Proton.WebGLUtil
         * @method matrixMultiply
         *
         * @todo add description
         * @todo add a, b description
         * @todo add return description
         *
         * @param {Object} a
         * @param {Object} b
         *
         * @return {Object}
         */
		matrixMultiply : function(a, b) {
			var a00 = a[0 * 3 + 0];
			var a01 = a[0 * 3 + 1];
			var a02 = a[0 * 3 + 2];
			var a10 = a[1 * 3 + 0];
			var a11 = a[1 * 3 + 1];
			var a12 = a[1 * 3 + 2];
			var a20 = a[2 * 3 + 0];
			var a21 = a[2 * 3 + 1];
			var a22 = a[2 * 3 + 2];
			var b00 = b[0 * 3 + 0];
			var b01 = b[0 * 3 + 1];
			var b02 = b[0 * 3 + 2];
			var b10 = b[1 * 3 + 0];
			var b11 = b[1 * 3 + 1];
			var b12 = b[1 * 3 + 2];
			var b20 = b[2 * 3 + 0];
			var b21 = b[2 * 3 + 1];
			var b22 = b[2 * 3 + 2];
			return [a00 * b00 + a01 * b10 + a02 * b20, a00 * b01 + a01 * b11 + a02 * b21, a00 * b02 + a01 * b12 + a02 * b22, a10 * b00 + a11 * b10 + a12 * b20, a10 * b01 + a11 * b11 + a12 * b21, a10 * b02 + a11 * b12 + a12 * b22, a20 * b00 + a21 * b10 + a22 * b20, a20 * b01 + a21 * b11 + a22 * b21, a20 * b02 + a21 * b12 + a22 * b22];
		}
	}

	Proton.WebGLUtil = WebGLUtil;
})(Proton);
