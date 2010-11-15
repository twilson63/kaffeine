for(var i in Plugins) { document.write("<script src='lib/plugins/" + Plugins[i]+ ".js'></scr" + "ipt>") }

$().ready(function() {
  Kaffeine = require("./kaffeine")
  
  var stream

//  for(var i in Plugins) { 
//    var p = Plugins[i]
//    Kaffeine.plugins[p] = require("./plugins/"+p)[p]
//  }
  
  var timer 
  $("#kaffeine").keyup(function(e) {
    //console.log(e.keyCode)
    if(timer) clearTimeout(timer)
    timer = setTimeout(compile, 200)    
  })
  
  function compile() {
    var K = new Kaffeine()
    try {
      var text = K.compile($("#kaffeine").val())
    }
    catch(e) {
      if(e.plugin)
        var text = "Error in plugin " + e.plugin + ":\n"  + e.toString() +"\n Current Stream: \n" + K.currentStream.collectText()
      else 
        var text = e.toString() //console.log(e) // ignore ...
    }
    $("#javascript").val(text)
  }

  if($("#kaffeine").val())
    compile()
  $("#kaffeine").focus()
})



