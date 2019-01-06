let draw_line = (x0, y0, x1, y1) => {

    
    //calculate deltas of the line
    //(difference between two ending points)
    
    let dx = x1 - x0;
    let dy = y1 - y0;
    
    //line equation based on deltas
    let D = (2 * dy) - dx;
    let y = y0;
    
    //draw the line based off provided args
    for (let x = x0; x < x1; x++) {
        //place pixel on raster display
        pixel(x, y);
        
        if( D >= 0) {
            y = y + 1;
            D = D - 2 * dx;
        }

        D = D + 2 * dy;
    }
;}
