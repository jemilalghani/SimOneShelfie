module.exports={
    read:(req,res)=>{
        const db = req.app.get('db');
        db.read_shelf().then(shelf=>{
            res.status(200).json(shelf)
        }).catch(error=>{
            console.error('error in GET /api/inventory', error);
        })
    },
    create:(req,res)=>{
        const db = req.app.get('db');
        const {name, price, image_url}=req.body;
        db.create_product([name,price,image_url]).then(()=>{
            res.status(200)
        }).catch(error=>{
            console.error('error in POST /api/inventory', error)
        })
    }





}


