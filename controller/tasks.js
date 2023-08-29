

const getAllTasks = (req, res) => {
  res.send('all items from file')
}

const getTask = (req, res) => {
  res.send('get single task from file')
}

const createTask = (req, res) => {
  res.send('create from file')
}

const updateTask = (req, res) => {
  res.send('update from file')
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