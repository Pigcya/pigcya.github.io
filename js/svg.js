/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
	var r_size = Math.floor(Math.random() * 65) + 10;
	var r_left = Math.floor(Math.random() * 100) + 1;
	var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  
  $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  $('.heart').each(function(){
    var top = $(this).css("top").replace(/[^-\d\.]/g, '');
    var width = $(this).css("width").replace(/[^-\d\.]/g, '');
    if(top <= -100 || width >= 150){
      $(this).detach();
    }
  });
},500);
var pathObj = {
      "boyfriend": {
        "strokepath": [
            {
                "path": "M115.7,167.7c38.7-46.7,124.5-44.5,162,6c25.9,34.9,25.5,88.4-2.7,120.7c-41.8,48.1-133.8,36.4-166.7-18  C88.8,244,90.8,197.7,115.7,167.7z",
                "duration": 600
            },
            {
                "path": "M150.3,289.3c34.2,19.8,72.8,17.1,94-4c13.7-13.6,16.6-31.3,17.3-40",
                "duration": 600
            },
            {
                "path": "M135.7,207c3.5-9.6,12.1-16.4,22-17.3c11.1-1.1,22,5.4,26.7,16",
                "duration": 600
            },
            {
                "path": "M209.7,201.3c0.6-1.6,5.7-14.1,18-17.3c12.6-3.3,27.6,4.3,34,19.3",
                "duration": 600
            },
            {
                "path": "M128.4,161.3c6.8,8.9,18.9,12.8,29.7,9.4c2.6-0.8,5.1-2.1,7.3-3.7c3.5-2.6,7.9-8.6,12.8-7.8c4.3,0.7,5.5,5,8.8,7.1    c2,1.3,4.4,1.9,6.7,2c6.2,0.2,11.5-2.8,16.3-6.4c3.6-2.7,7.8-6.1,12.6-5.1c4.1,0.9,4.5,4.9,7.8,6.8c4.9,2.8,10.3-1.2,15.3-1.2    c3.4,0,6.3,2.6,9.7,3c3.4,0.5,6.6-0.4,9.5-2.2c1.7-1,0.2-3.6-1.5-2.6c-5.2,3.1-8.3,1.4-13.3-0.4c-2-0.7-3.8-1-6-0.7    c-3.2,0.4-6.4,2.1-9.6,2c-3.8-0.2-4.5-3.9-7-5.9c-10-8.1-20.8,7.5-30.1,9.3c-3.8,0.7-7.7,0.2-10.5-2.7c-1.9-2-2.8-4.4-5.5-5.5    c-5.2-2.2-10.1,1.3-13.9,4.5c-5.6,4.8-11,7.9-18.7,7.5c-6.9-0.4-13.5-3.6-17.7-9.1C129.9,158.2,127.2,159.7,128.4,161.3    L128.4,161.3z",
                "duration": 1300
            }
        ],
        "dimensions": {
            "width": 400,
            "height": 600
        }
    },
     "book": {
        "strokepath": [
            {
                "path": "M69.6,150.8c1.4,26.7-2.6,53.1-5.1,79.6c-2.5,26.8-3.6,53.8-3.9,80.7c-0.3,26.6,0.1,53.3,0.5,79.9    c0.1,4.1-0.7,9.6,1.3,13.4c2.4,4.5,8.4,6.5,12.7,8.5c10.3,4.8,21.1,8.7,32.1,11.6c50.3,13,100.4-0.7,150.9-4.4    c6-0.4,12-0.7,18-0.8c4.5-0.1,10,0.7,14.3-1.4c3.6-1.8,5.5-5.3,6.9-8.9c2.2-5.8,3.8-12,5.2-18c5.4-23.5,6.1-47.9,4.7-71.9    c-3.6-58.9-20.7-116.9-15.3-176.3c0.1-0.6-0.5-1.3-1.1-1.4c-18.4-5-37.9-5-56.8-6.1c-20.3-1.2-40.5-2.4-60.8-3.6    c-33.4-2-70.6-6.7-100.5,11.7c-1.6,1-0.1,3.6,1.5,2.6c30-18.4,67.6-13.1,101-11.2c18.9,1.1,37.9,2.3,56.8,3.4    c19.3,1.2,39.2,1,58,6.1c-0.4-0.5-0.7-1-1.1-1.4c-4.6,50.1,6.9,99.4,12.8,148.9c2.8,23.3,4.3,46.9,2.3,70.4    c-1,12.2-3.1,24.3-6.3,36.2c-1.4,4.9-2.6,12.3-6.5,15.8c-4.5,4.1-14,2.3-19.6,2.4c-48.7,1.5-97.1,16.3-145.9,8.8    c-11.1-1.7-22.1-4.5-32.7-8.3c-5.5-1.9-10.8-4.1-16.1-6.6c-2.5-1.2-5.4-2.3-7.7-3.9c-4.2-2.8-4.6-6-4.7-10.5    c-0.5-25.3-0.9-50.6-0.7-76c0.2-28.3,1.1-56.5,3.6-84.7c2.5-28.1,7-56.2,5.5-84.5C72.5,148.9,69.5,148.9,69.6,150.8L69.6,150.8z",
                "duration": 1800
            },
            {
                "path": "M101.4,159.7c-0.3,7-0.6,14-1,21.1c-0.2,4.2-1.9,10.7,1.7,13.9c3.1,2.8,9.7,3.2,13.5,4.1c6.9,1.6,13.9,3.1,20.9,4.5    c26.5,5.2,53.3,8.5,80.2,9.9c6.8,0.3,13.6,0.6,20.4,0.7c3.6,0.1,8.4,0.8,10.6-2.7c2.3-3.7,1.9-9.9,2.3-14    c0.7-7.2,1.1-14.4,1.2-21.6c0.1-3.7,1.1-9.6-1.2-12.9c-2.7-3.9-10.3-5.5-14.5-6.6c-12.1-3-24.8-2.9-37.2-3.4    c-31.4-1.2-62.8-2-94.2-0.3c-1.9,0.1-1.9,3.1,0,3c23.5-1.3,47.1-1.2,70.7-0.5c11.7,0.3,23.4,0.8,35.1,1.3    c10.9,0.5,22.1,1.1,32.3,5.2c4.1,1.7,5.9,2.8,6.1,7.4c0.1,2.9,0,5.9,0,8.9c-0.1,5.9-0.5,11.8-1,17.7c-0.3,2.9-0.6,5.9-0.9,8.8    c-0.6,4.9-2.6,7-7.3,6.9c-5.8,0-11.6-0.2-17.4-0.5c-23.8-1-47.5-3.5-70.9-7.5c-12.7-2.2-25.4-4.8-38-7.8c-3.7-0.9-8.8-1.1-9.6-5.8    c-0.5-2.8,0.3-6.5,0.4-9.4c0.3-6.7,0.6-13.4,0.9-20.1C104.4,157.8,101.4,157.8,101.4,159.7L101.4,159.7z",
                "duration": 1400
            },
            {
                "path": "M122.2,273.5c12.4-4.9,26.6-3.4,39.7-3.2c13.8,0.2,27.7,0.7,41.5,1.5c1.9,0.1,1.9-2.9,0-3c-14.5-0.8-28.9-1.3-43.4-1.5    c-12.8-0.2-26.4-1.4-38.5,3.4C119.6,271.3,120.4,274.2,122.2,273.5L122.2,273.5z",
                "duration": 600
            },
            {
                "path": "M129.3,301.8c24.4-1.7,48.6,5.9,73,2.1c1.9-0.3,1.1-3.2-0.8-2.9c-24.1,3.7-48.1-4-72.2-2.3    C127.4,298.9,127.4,301.9,129.3,301.8L129.3,301.8z",
                "duration": 600
            },
            {
                "path": "M137.6,341.8c33,3.5,66.1,5.9,99.3,7.3c1.9,0.1,1.9-2.9,0-3c-33.2-1.4-66.3-3.8-99.3-7.3    C135.7,338.6,135.7,341.6,137.6,341.8L137.6,341.8z",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 400,
            "height": 600
        }
    },
      "psp": {
        "strokepath": [
            {
                "path": "M148.4,206.5l120-0.2c52.2,0,94.5,80.9,94.5,180.8c-34.1,34.7-55.2,38.9-68.5,34.9c-18.1-5.4-17-24.4-41.1-39.7  c-23-14.7-58.9-19.5-82.9-4.8c-25.9,15.9-21.1,44.1-41.1,50c-21,6.2-51.1-17.6-62.3-40.4c-33.9-69.2,41.2-185.2,84.9-180.8  c19.4,1.9,24.9,27.1,53.4,31.5c22.2,3.4,42.6-8.3,56.2-18.5",
                "duration": 600
            },
            {
                "path": "M111.9,300.2c-0.2-4.2,0.1-8.4,1.3-12.5c1-3.3,2.1-6.4,5.8-7.7c2.1-0.7,5.1-0.7,7.3-0.7c5.7,0.1,11.1,2.4,11.3,8.8    c0.1,2.9-0.6,5.9,0.8,8.6c2.1,4.3,7.1,5.2,11.4,5.6c3.2,0.3,6.9,0.1,9.8,1.9c3.5,2.3,2.5,7.2-0.5,9.4c-2.4,1.8-5.2,2.2-8.2,2.3    c-4.6,0.1-12.2-2.1-15.3,2.6c-1.2,1.8-1,3.8-0.7,5.8c0.8,4.8,2.1,8.8-1.6,12.9c-7.5,8.2-18.8-0.1-20.2-8.9    c-0.7-4.5,2.3-10.9-3.1-13.4c-3-1.4-7-1-10.3-1.7c-3.6-0.8-7.2-2-10.2-4.4c-4.1-3.2-6.9-9.2-0.6-11.9c4.7-2,12.1-1.1,17.1-0.9    c1.9,0.1,1.9-2.9,0-3c-5.9-0.3-12.1-0.3-17.9,1c-2.9,0.6-5.3,1.9-6,5c-1.6,6.6,4.8,12.4,10.1,14.9c3.5,1.6,7.3,2.4,11.1,2.9    c3.9,0.5,6.1-0.4,6.7,5.4c0.2,2.2-0.3,4.3,0,6.6c1.3,7.6,7.1,14.1,15.1,14.4c7.1,0.3,13.3-5.2,13.7-12.3c0.1-2.2-0.7-3.9-0.9-6    c-0.2-2.1-2.3-4.3,1.7-6.1c1.3-0.6,3.4-0.3,4.8-0.3c4.8,0.1,9.9,0.9,14.3-1.3c5.7-2.9,9-10.5,3.1-15c-2.7-2.1-6.4-2.5-9.7-2.8    c-2.2-0.2-4.5-0.2-6.6-0.8c-5.4-1.6-5-6-5.1-10.6c-0.1-10.9-11.1-12.5-19.7-11.4c-4.5,0.6-6.9,1.7-9,5.9    c-2.6,5.4-3.4,11.6-3.1,17.6C109,302.1,112,302.1,111.9,300.2L111.9,300.2z",
                "duration": 1800
            },
            {
                "path": "M241.6,281.5c-2.1,7.4,2.2,15.3,9.4,18c7.9,2.9,16.9-1.5,21.3-8.3c10.9-17-19.5-34.2-30-18.2c-1.1,1.6,1.5,3.1,2.6,1.5    c4.3-6.6,12.7-5.7,18.7-2.1c2.7,1.6,5.9,4,7.3,7c2.1,4.3,0.3,8.9-2.7,12.2c-3.7,4.2-9.7,6.9-15.2,5.4c-6.3-1.7-10.4-8.4-8.6-14.7    C245,280.4,242.1,279.6,241.6,281.5L241.6,281.5z",
                "duration": 600
            },
            {
                "path": "M302.2,303.9c-8.7,1.4-17.2,7.2-18.1,16.6c-1,9.5,5.6,15.4,14.2,17.5c8.4,2.1,16.8-1.6,20.2-9.8c3.4-8.5-1-17.6-8.3-22.3    c-1.6-1-3.1,1.6-1.5,2.6c6.2,3.9,9.9,11.6,7,18.7c-3.1,7.5-10.6,9.8-18,7.5c-7-2.1-11.9-7.4-10.3-15.1c1.5-7.6,8.7-11.7,15.8-12.8    C304.9,306.4,304.1,303.6,302.2,303.9L302.2,303.9z",
                "duration": 600
            },
            {
                "path": "M254,276.8c-0.1,4.9-0.6,9.8-1.6,14.6c-0.4,1.9,2.5,2.7,2.9,0.8c1.1-5.1,1.6-10.2,1.7-15.4C257,274.9,254,274.9,254,276.8    L254,276.8z",
                "duration": 600
            },
            {
                "path": "M256.6,278.2c4.2,2.8,7.5,6.5,9.8,11c0.9,1.7,3.5,0.2,2.6-1.5c-2.5-4.9-6.3-9-10.9-12.1    C256.5,274.5,255,277.1,256.6,278.2L256.6,278.2z",
                "duration": 600
            },
            {
                "path": "M256.4,288.5c2.6,0.4,5.1,0.3,7.7-0.5c1.8-0.6,1.1-3.5-0.8-2.9c-2,0.6-4,0.8-6.1,0.5C255.3,285.3,254.5,288.2,256.4,288.5    L256.4,288.5z",
                "duration": 600
            },
            {
                "path": "M291.6,315.4c2.6,4.1,4.3,8.4,5,13.2c0.3,1.9,3.2,1.1,2.9-0.8c-0.7-5-2.5-9.7-5.3-13.9    C293.1,312.3,290.5,313.8,291.6,315.4L291.6,315.4z",
                "duration": 600
            },
            {
                "path": "M297.9,315.6c1.7-0.2,3.7-0.2,5.1,1c1.9,1.6,1.9,5.6-1.4,5.2c0,1,0,2,0,3c1.1-0.1,3.7-0.3,4.4,0.9c2.6,4-2.3,3.1-3.3,3.1    c-1.6,0-2.8,0-4.2,0.9c-1.6,1-0.1,3.6,1.5,2.6c2-1.2,4.6,0.1,6.8-0.7c1.6-0.6,2.7-2,2.9-3.7c0.5-4.6-4.3-6.5-8.1-6.1    c-1.9,0.2-1.9,2.8,0,3c3.7,0.4,6.5-3.4,5.8-6.9c-0.8-4.2-5.7-5.7-9.5-5.4C296,312.8,296,315.8,297.9,315.6L297.9,315.6z",
                "duration": 800
            }
        ],
        "dimensions": {
            "width": 400,
            "height": 600
        }
    },
    "lara": {
        "strokepath": [
            {
                "path": "M341.3,208.1c-7-25-26.8-45.4-52-52.2c-13.8-3.7-28.7-3.4-42.3,0.9c-13.7,4.3-25.5,13-36.1,22.4    C188.6,199,172,224,160.8,251.7c-11.7,28.6-18.1,58.9-26.3,88.6c-4.4,15.9-8.4,33.4-17.4,47.5c-8.2,12.8-26.7,24.1-40.9,12.9    c-2.5-2-6.1,1.5-3.5,3.5c8.8,7,20.4,7.2,30.5,2.8c11.9-5.3,19.2-16.6,24.1-28.1c11.6-27.2,16.9-57.1,24.8-85.5    c8.3-29.5,18.9-58.6,37.4-83.4c17.6-23.7,43.1-48.7,74-51.4c33.3-2.9,64,18.8,73,50.9C337.4,212.5,342.2,211.2,341.3,208.1    L341.3,208.1z",
                "duration": 1000
            },
            {
                "path": "M329.6,216.1c12.9-1.9,25.1,4.6,33.6,14c9.7,10.8,13.7,25.3,15.2,39.5c2.5,24-3.9,52.6,12.2,73c0.4-1.4,0.7-2.8,1.1-4.2    c-9.9,4-14,13.6-15,23.7c-1.4,13.3,4.4,27,0.7,40.1c-4.1,14.6-19.8,18.1-33.1,18.6c-15.8,0.6-32.3-0.8-47.3-6.1    c-15.5-5.5-29.2-16-36-31.2c-1.3-2.9-5.6-0.4-4.3,2.5c13,29.1,46.1,38.5,75.4,39.7c12.6,0.5,27.1,0.6,38.2-6.3    c12.1-7.6,14-21.1,12.8-34.3c-1.2-12.9-5.8-35.4,10-41.8c1.8-0.7,2.3-2.6,1.1-4.2c-9.1-11.5-9.6-26.9-9.7-41    c-0.1-14.9,0-29.9-3.8-44.4c-6.1-23.5-26-46.2-52.4-42.3C325.1,211.8,326.5,216.6,329.6,216.1L329.6,216.1z",
                "duration": 1300
            },
            {
                "path": "M313.6,244.3c-15-10.8-34.9-11.1-51.8-4.5c-18,7.1-31.3,21.8-40.8,38.2c-10.9,19-16.8,40.3-23.7,61    c-6.8,20.3-15,45.1-33.5,57.9c-10.4,7.2-23.3,9.1-35.6,10.4c-13.1,1.4-27.2,3.3-39.5-2.5c-2.9-1.4-5.4,2.9-2.5,4.3    c9.5,4.5,19.6,5.1,30,4.3c10.7-0.7,21.7-1.7,32.1-4.4c20.4-5.2,33-20,41.9-38.3c18.8-38.6,21.9-89.2,57.9-117.4    c17.6-13.8,44.1-18.4,63.1-4.8C313.7,250.5,316.2,246.2,313.6,244.3L313.6,244.3z",
                "duration": 800
            },
            {
                "path": "M265.9,237.3c-17,30.8-21.3,66.2-20.5,100.9c0.4,17.1,1.7,34.2,4,51.1c2.2,16.4,6.4,32.5,16.8,45.7c2,2.5,5.5-1,3.5-3.5    c-10.3-13.1-13.8-29.9-15.8-46.1c-2-16.2-3.3-32.6-3.6-48.9c-0.6-33.2,3.5-67.1,19.9-96.6C271.8,237,267.4,234.5,265.9,237.3    L265.9,237.3z",
                "duration": 600
            },
            {
                "path": "M379.3,268.8c-7.3-5.5-16-7.4-24.9-6.2c-3.2,0.4-1.8,5.3,1.3,4.8c7.6-1.1,14.9,1.1,21.1,5.7    C379.3,275.1,381.8,270.8,379.3,268.8L379.3,268.8z",
                "duration": 600
            },
            {
                "path": "M349,295.8c8.6-5.3,17.9-8.5,28-9.6c3.2-0.3,3.2-5.3,0-5c-10.9,1.1-21.1,4.5-30.5,10.3C343.8,293.1,346.3,297.5,349,295.8    L349,295.8z",
                "duration": 600
            },
            {
                "path": "M339.5,297.9c11,17.3,37.4,13.1,41.8-7.2c0.7-3.1-4.1-4.5-4.8-1.3c-3.4,15.8-23.9,19.9-32.7,6    C342.1,292.6,337.8,295.1,339.5,297.9L339.5,297.9z",
                "duration": 600
            },
            {
                "path": "M377.4,372.8c-4.8,1-9.5,1.6-14.4,1.7c-3.2,0.1-3.2,5.1,0,5c5.3-0.1,10.5-0.8,15.7-1.9C381.9,377,380.5,372.1,377.4,372.8    L377.4,372.8z",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 596,
            "height": 842
        }
    }
            
}; 
 
 
 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 var svg_objects = ['#boyfriend','#book,#psp','#lara'];
 
 
 
 
svgpaint = function(index)
 {
 	if(index - 2 < 0)
 	{
 		return;
 	}
 	
 	index = index -2;
 	//这里要跳过第一个蛋糕吧大概
 	console.log(svg_objects[index]);
 	$(svg_objects[index]).lazylinepainter( 
	 {
	    "svgData": pathObj,
	    "strokeWidth": 5,
	    "strokeColor": '#916F6F'
	}).lazylinepainter('paint'); 
 };
 
 
// $(document).ready(function(){ 
// $('#boyfriend').lazylinepainter( 
// {
//  "svgData": pathObj,
//  "strokeWidth": 2,
//  "strokeColor": "#e09b99"
//}).lazylinepainter('paint'); 
// $('#book').lazylinepainter( 
// {
//  "svgData": pathObj,
//  "strokeWidth": 2,
//  "strokeColor": "#e09b99",
//  'delay' : 1000
//}).lazylinepainter('paint'); 
// });
