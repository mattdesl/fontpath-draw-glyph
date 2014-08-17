var MOVETO = 'm',
    LINETO = 'l',
    QUADTO = 'q',
    CUBICTO = 'c';

/**
 * Draws a glyph as a series of path operations (moveTo, bezierCurveTo, etc),
 * with the optional translation and scaling applied. 
 */
 module.exports = function(context, glyph, scale, x, y) {
    if (!glyph.path || glyph.path.length===0)
        return;

    x = x||0;
    y = y||0;
    scale = typeof scale === "number" ? scale : 1;

    var path = glyph.path;
    for (var i=0; i<path.length; i++) {
        var p = path[i];
        var f = p[0];
        if (f===MOVETO) 
            context.moveTo(p[1]*scale+x, p[2]*-scale+y);
        else if (f===LINETO) 
            context.lineTo(p[1]*scale+x, p[2]*-scale+y);
        else if (f===QUADTO) 
            context.quadraticCurveTo(p[1]*scale+x, p[2]*-scale+y, p[3]*scale+x, p[4]*-scale+y);
        else if (f===CUBICTO) 
            context.bezierCurveTo(p[1]*scale+x, p[2]*-scale+y, p[3]*scale+x, p[4]*-scale+y, p[5]*scale+x, p[6]*-scale+y);
    }
}