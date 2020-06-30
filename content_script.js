var elements = document.getElementsByTagName('*');

for(let i = 0; i<elements.length;i++){
    var element = elements[i];

    for(let j = 0; j<element.childNodes.length;j++){
        var node = element.childNodes[j];

        if(node.nodeType === 3){
            var text = node.nodeValue;
            //basic word replace
            //todo: make better regex to allow for upper and lowercase
            var replacedText = text.replace(/men|people/gi, 'hunks');
            replacedText = replacedText.replace(/mam|person/gi, 'hunk');

            node.nodeValue = replacedText;

            //finds words starting with nonvowels and replaces their endings with another substring
            //maybe instead of adding to array, just call .replace every time a word is changed?
            //might reduce weird formating problems from adding spaces.
            //but how make it only replace the current word we're looking at?
            var str = "";
            var array = node.nodeValue;
            array = array.split(" ");
            for(let k = 0; k<array.length; k++){
                var s = array[k];
                var rand = Math.floor((Math.random() * 5) + 1);
                if(s.length>5 && s.length<9 && /^[a-zA-Z]*/.test(s) && rand>3){
                    if(/^[^aeiouAEIOU]{1,2}[AEIOUaeiou]/.test(s)){k
                       parts = s.split(/([AEIOUaeiou].*)/);
                       str+=parts[0]+"ungus ";
                   }
                    else{
                        str+=s+" ";
                    }
                }
                else{
                    str+=s+" ";
                }
            }
            //remove the last space from end of string
            str = str.substring(0,str.length-1);
            //there's probably a better way of doing this 
            replacedText = replacedText.replace(/.*/, str);
            element.replaceChild(document.createTextNode(replacedText), node);
        }
        
    }
    
}

//var medlength = /^[a-zA-Z]{4,9}/;

//text[i].length()>3 && text[i].length()<9 word is a good length
//\w
//^[a-zA-Z]*  word contains only letters

///^[^AEIOUaeiou]{1}

//^[^AEIOUaeiou]{1}r

//^[^AEIOUaeiou]{2}

//^[AEIOUaeiou]+[^AEIOUaeiou]+

//ungus rungus ingus ringus ongus rongus angus rangus engus rengus
