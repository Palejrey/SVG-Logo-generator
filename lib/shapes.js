function shapes(color,text) {
    this.setColor = color;
    this.setText = text; 
};

shapes.prototype.circle = (setColor) =>{ 
    return `<circle cx="150" cy="100" r="80" fill="${setColor}"/>`;
};

shapes.prototype.triangle = (setColor) =>{
    return `<polygon points="40,220 250,200 145,0" style="fill:${setColor};"/>`; 
};

shapes.prototype.square = (setColor) =>{
    return  `<rect x="100" y="50" rx="10" ry="10" width="100" height="100"  fill="${setColor}" />`;
};
shapes.prototype.text = (setText, textColor) =>{
    return `<text x="150" y="130" font-size="60" text-anchor="middle" fill="${textColor}">${setText}</text>`;
};
module.exports = shapes;