var elements = document.getElementsByTagName('*');

for(let i = 0; i<elements.length;i++){
    var element = elements[i];

    for(let j = 0; j<element.childNodes.length;j++){
        var node = element.childNodes[j];

        if(node.nodeType === 3){
            var text = node.nodeValue;
            var replacedText = text.replace(/men|people/gi, 'hunks');
            replacedText = replacedText.replace(/mam|person/gi, 'hunk');

            node.nodeValue = replacedText;

            var str = "";
            var array = node.nodeValue;
            array = array.split(" ");
            for(let k = 0; k<array.length; k++){
                var s = array[k];
                var rand = Math.floor((Math.random() * 5) + 1);
                if(s.length>5 && s.length<9 && /^[a-zA-Z]*/.test(s) && rand>4){
                    if(/^[^aeiouAEIOU]/.test(s)){k
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
