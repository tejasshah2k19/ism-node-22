let http = require("http") //internal
//fs
let fs = require("fs")

http.createServer(function (req, res) {
    console.log("request............." + req.url);
    if (req.url == "/login") {
        let loginFile = fs.readFileSync("login.html")
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(loginFile);
    } else if (req.url == "/home") {
        res.write("home");
    }
    res.end();
}).listen(9898)



//Parent p = new Parent(); p.add();
//new Parent().add();  