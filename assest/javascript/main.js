let body = document.querySelector("body")
let coin = {
    state: 0,
    flip: function() {
        coin.state = Math.floor(Math.random() * 2)
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        this.flip()
        if (this.state === 0) {
            return "Head"
            
        } 
        else {
            return "Tail"
        }
    
    },
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    
    toHTML: function() {
        
        let image = document.createElement('img');
        if (this.state === 0 ) {
             image.src = "./assest/images/coinHead.jpg";
        
        } else {
            image.src = "./assest/images/cointail.jpg";
            
        }
        return image;
    }
}
/* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

//console.log(this.flip())
// console.log(coin.toString())
// console.log(coin.toHTML)

function display20Flips(newCoin) {
        for (let i = 1; i <= 20; i++) {
            console.log(i + " " + newCoin.toString())
            newCoin.toString()
            coin.flip()
         
        let divs = document.createElement('div');
            body.append(divs);
            divs.append(newCoin.toString())
        
        }
    }
    display20Flips(coin);
    
    
    function display20images(displayImg) {
        for (let j = 1; j <= 20; j++) {
             displayImg.toHTML()
             coin.flip()
        
        let divs = document.createElement('div');
            body.append(divs);
            divs.append(displayImg.toHTML())
        
            
        }
    }
    display20images(coin);
