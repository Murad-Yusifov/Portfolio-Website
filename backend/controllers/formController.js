import Form from "../models/formModel.js";

export const addData = async (req, res) => {
  try {
    const {skills,experience, experienceInfo, projects } = req.body;
    const newForm = new Form({
      skills,experience, experienceInfo, projects
    });

    const savedForm = await newForm.save();

    res.status(201).json(savedForm);
  } catch (error) {
    console.log(error);
    res.json({error:error, message: error});
  }
};

export const formData = async (req, res) => {
  try {
    const data = await Form.find();
    res.json(data);
  } catch (error) {
    res.json(error);
    console.log(error)
  }
};

export const getSingleData = async (req, res) => {
  try {
    const { id } = req.params; // destructure the id from params
    const data = await Form.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const putForm = async (req, res) => {
  try {
    const {id} = req.params;

    const updatedData = await Form.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(updatedData);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};


export const deleteData = async (req, res)=>{
   try {
     const {id}= req.params
     const deletedData = await Form.findByIdAndDelete(id)
     res.json("data is deleted")
   } catch (error) {
    console.log(error)
    res.json(error)
    throw error

    
   }

}