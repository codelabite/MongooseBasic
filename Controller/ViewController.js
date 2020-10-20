const schemaControl = require('../Schema/schemaStructure')

exports.getCodeLabs = async (req, res, next)=>{
  try{
    const newData = await schemaControl.find()
    res.status(200).json(newData)
  }catch (err) {
    console.log(err)
    }
}

exports.getCodeLab = async (req, res, next)=>{
  try{
    const newData = await schemaControl.findById(req.params.id)
    res.status(200).json(newData)
  }catch (err) {
    console.log(err)
    }
}

exports.postCodeLab = async (req, res, next)=>{
  try{
    const createData = new schemaControl({
      name: req.body.name,
      interest: req.body.interest,
      age: req.body.age,
    })

    const enteredData = await createData.save()
    res.status(201).json(enteredData)
  }catch (err) {
    console.log(err)
  }

  // try{
  //   const newData = await schemaControl.create(req.body)
  //   res.status(200).json(newData)
  // }catch (err) {
  //   console.log(err)
  //   }
}


exports.patchCodeLab = async (req, res, next)=>{

  try{
    const editData = await schemaControl.findById(req.params.id)
    name = req.body.name

    const saveData = await editData.save()
    res.status(200).json(saveData)

  }
  catch (err) {
    console.log(err)
  }
}



exports.deleteCodeLab = async (req, res, next)=>{
  try{
    const newData = await schemaControl.findByIdAndDelete(req.params.id)
    res.status(204).json(null)
  }catch (err) {
    console.log(err)
    }
}




//   try{
//     const newData = await schemaControl.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     })
//     res.status(200).json(newData)
//   }catch (err) {
//     console.log(err)
//     }
// 