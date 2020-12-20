var x1=0;
        var y1=0;
        var dx1=5;
        var dy1=5;
        function float()
        {
            x1+=dx1;
            y1+=dy1;
            floaticon.style.left = x1;
            floaticon.style.top = y1;
            if(x1<=0 || x1>=document.body.clientWidth-floaticon.offsetWidth)
            dx1=-dx1;
            if(y1<=0 || y1>=document.body.clientHeight-floaticon.offsetHeight)
            dy1=-dy1;
            setTimeout("float()",50);
        }
            //setInterval("float()",100);
            setTimeout("float()",50);