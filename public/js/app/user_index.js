define(['util/template','dojo/domReady!'],function(template){
    return function(option,dom){
        template(dom,'user_index.html',function(){
            console.log('helloworld');
        });
    };
});