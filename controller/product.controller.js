import '../models/connection.js';
import UserSchemaModel from '../models/user.model.js';
import CategorySchemaModel from '../models/category.model.js';
import ProductSchemaModel from '../models/product.model.js';
import url from 'url';
import path from 'path';
import rs from './randomstring.controller.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var save=async (req,res,next)=>{
    var pDetails=req.body
    // console.log(req.body)
    // console.log(req.files)
    var pList=await ProductSchemaModel.find().sort({"_id":-1}).limit(1);
    var l=pList.length;
    var _id=l==0?1:pList[0]._id+1;
    var fileobj=req.files.piconnm;
    //console.log(fileobj)
    var filename=Date.now()+"-"+rs+"-"+fileobj.name;
    var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/producticons",filename);
    fileobj.mv(uploadpath);
   pDetails={...pDetails,"piconnm":filename,"_id":_id,"info":Date.now()};
    var product = await ProductSchemaModel.create(pDetails);
    if(product)
      return res.status(201).json({"result":"Product added successfully...."});
    else
      return res.status(500).json({"result": "Server Error"});    
}


export var updateCategory=async(request,response,next)=>{
  let userDetails = await CategorySchemaModel.findOne(JSON.parse(request.body.condition_object));
  if(userDetails){
     let category=await CategorySchemaModel.updateOne(JSON.parse(request.body.condition_object),{$set:JSON.parse(request.body.set_condition)});   
     if(category)
      return response.status(201).json({"msg":"success"});
     else
      return response.status(500).json({error: "Server Error"});
  }
  else
   return response.status(404).json({error: "Requested resource not available"});
}

export var deleteCategory=async(request,response,next)=>{
  var cDetails = await CategorySchemaModel.find(JSON.parse(request.body.condition_object));
  if(cDetails.length!=0){
    let result = await CategorySchemaModel.deleteMany(JSON.parse(request.body.condition_object)); 
    if(result)
     return response.status(201).json({"msg":"success"});
    else
     return response.status(500).json({error: "Server Error"});
  }
  else
    return response.status(404).json({error: "Resource not found"}); 
}

export var fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var pList = await ProductSchemaModel.find(condition_object);
  var l=pList.length;
  if(l!=0)
  {
    return res.status(201).json(pList);
  }
  else
    return res.status(201).json(pList);
}




