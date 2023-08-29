

const getAllTasks = (req, res) => {
  res.send('all items from file')
}

const getTask = (req, res) => {

  try {
    res.json({id:req.params.id})
    
  } catch (error) {
    res.send(error.message)
  }
}

const createTask = (req, res) => {
  res.json(req.body)
}

const updateTask = (req, res) => {
  try {
    res.json({id:req.params})
    
  } catch (error) {
    res.send(error.message)
  }
}

const deleteTask = (req, res) => {
  res.send('delete from file')
}


module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}