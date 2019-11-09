class Block {
    constructor(name, pixels) {
        this.name = name;
        this.pixels_attributes = this.createPixels(pixels);
    }

    createPixels(pixels) {
        let pixelArray = [];
        for(let p of pixels) {
            let coordinates = p.id.split('-')[1];
            let x = coordinates.split(',')[0];
            let y = coordinates.split(',')[1];
            let color = p.style.backgroundColor;
            let color_variable = p.classList[1];
            p = new Pixel(x, y, color, color_variable);
            pixelArray.push(p);
        }
        return pixelArray
    };

}