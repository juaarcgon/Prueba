<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Editar Perro</h4>
                    </div>
                </div>
                <div class="card-body">
                <form @submit.prevent="actualizar">
                    <div class="row">
                        <div class="grid grid-cols-1 mt-5 mx-7">
                            <div class="form-group">
                                    <label >Subir Imagen</label>
                                    <div >
                                        <input type="text" class="imagen" id v-model="perro.image">
                                    </div>         
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="form-group">
                                    <label >Raza</label>
                                    <input type="text" class="form-control" v-model="perro.breed">
                            </div>
                        </div> 
                        <div class="col-12 mb-2">
                            <div class="form-group">
                                    <label >Tamaño</label>
                                    <input type="text" class="form-control" v-model="perro.size">
                            </div>
                        </div> 
                        <div class="col-12 mb-2">
                            <div class="form-group">
                                    <label >Color de Pelo</label>
                                    <input type="text" class="form-control" v-model="perro.haircolor">
                            </div>
                        </div> 
                        <div class="col-12">
                             <button type="submit" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"editar-perro",
    data() {
        return{
             perro:{
                image:"",
                breed:"",
                size:"",
                haircolor:""
            }
        }
    },
    mounted(){
        this.mostrarPerro()
    },
    methods:{
        async mostrarPerro(){
            this.axios.get('/api/dogs/' + this.$route.params.id)
           .then(reponse =>{
                const {image,breed,size,haircolor} =reponse.data
                    this.perro.image = image,
                    this.perro.breed = breed,
                    this.perro.size = size,
                    this.perro.haircolor= haircolor
                }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            this.axios.put('/api/dogs/' + this.$route.params.id,this.perro)
           .then(reponse =>{
               this.$router.push({
                   name:"mostrarPerros"
               })
           }).catch(error=>{
                console.log(error)
            });
        }
    }
}
</script>