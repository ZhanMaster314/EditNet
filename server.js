import http from "http"
import fs from "fs/promises"
import url from 'url'
import path from 'path'

const PORT=process.env.PORT
const __fileame=url.fileURLToPath(import.meta.url)
const __dirname=path.dirname(__fileame)
const users=[
    {id:1},
    {id:2},
    {id:3},
]

//Content type Definer
const jsonMiddleWare=(req,res,next)=>{
    res.writeHead(500,{'Content-Type':'application/json'})
    next()
}
const getUsersHandler=(req,res)=>{
    res.write(JSON.stringify(users))
    res.end()
}
const getUserByIdHandler=(req,res)=>{
    const id=req.url.split('/')[3]
            const user=users.find((user)=>user.id===parseInt(id))
            res.writeHead(500,{'Content-Type':'application/json'})
            if(user){
                res.write(JSON.stringify(user))
            }else{
                res.statusCode(404)
                throw new Error('no such user exists')
            }
}

const server =http.createServer(async(req,res)=>{

    try{
        if(req.method==="GET" && req.url ==='/api/users'){
            res.writeHead(500,{'Content-Type':'application/json'})
            getUsersHandler(req,res)
        }else if(req.method==="GET" && req.url.match(/\/api\/users\/([0-9]+)/)){
            getUserByIdHandler(req,res)
        }else{
            throw new Error('metod error')
        }
    }catch(e){
        res.writeHead(500,{'Content-Type':'text/html'})
        res.end('<h1>M means error</h1>')
    }
    
    
})

server.listen(PORT,()=>{
    console.log('Server is runtime')
})