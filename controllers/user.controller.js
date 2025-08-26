function userController(req, res) {
    console.log('inputs:', req.body);
    res.send("Welcome user...");
}

export default {
    userController: userController
}