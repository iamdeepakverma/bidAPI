import '../models/connection.js';
//import UserSchemaModel from '../models/user.model.js';
import SubCategorySchemaModel from '../models/SubCategory.model.js';
import url from 'url';
import rs from 'randomstring';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.',import.meta.url));
export var save=async (req,res,next)=>{
    var SubcategoryDetails=req.body;
    var fileobj=req.files.caticon;
    var key=rs.generate();
    var subcaticonnm=Date.now()+"-"+key+"-"+fileobj.name;
    SubcategoryDetails.subcaticonnm=subcaticonnm
    // console.log(categoryDetails);
    var scList = await SubCategorySchemaModel.find();
    var l=scList.length;
    var _id=l==0?1:scList[l-1]._id+1;
    SubcategoryDetails={...SubcategoryDetails,"_id":_id};
    try
    {
     var category = await SubCategorySchemaModel.create(SubcategoryDetails);
     var file_upload_path=path.join(__dirname,"../../UI/public/assets/uploads/subcaticons",subcaticonnm);
     fileobj.mv(file_upload_path);
     res.status(201).json({"status":true});
    }
    catch(err)
    {
     console.log(err);
     res.status(500).json({"status": false});
    }
}

export var updateCategory=async(request,response,next)=>{
  let cDetails = await CategorySchemaModel.findOne(JSON.parse(request.body.condition_obj));
  if(cDetails){
     let c=await CategorySchemaModel.updateOne(JSON.parse(request.body.condition_obj),{$set: JSON.parse(request.body.content_obj)});   
     if(c)
      return response.status(201).json({"msg":"success"});
     else
      return response.status(500).json({error: "Server Error"});
  }
  else
   return response.status(404).json({error: "Requested resource not available"});
}

export var deleteCategory=async(request,response,next)=>{
  var condition_obj=request.body;
  var cDetails = await CategorySchemaModel.find(condition_obj);
  if(cDetails.length!=0){
    let result = await CategorySchemaModel.deleteMany(condition_obj); 
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
  var scList = await SubCategorySchemaModel.find(condition_object);
  var l=scList.length;
  if(l!=0)
    return res.status(201).json(scList);
  else
    return res.status(500).json({"result": "Server Error"});
}




