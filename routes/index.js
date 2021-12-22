import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    console.log(req.oidc.isAuthenticated())
    if(req.oidc.user){
        console.log(req.oidc.user)
    }
    res.render('index', {
        title: 'Probando Auth0',
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user
    })
})

export default router;