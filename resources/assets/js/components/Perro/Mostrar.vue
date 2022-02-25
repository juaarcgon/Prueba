<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12 mb-4">
            <router-link :to='{name:"crearPerro"}' class="btn btn-success">Nuevo Perro</router-link>
        </div>
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table bordered">
                    <thead class="bg-primary text-white">
                        <th>Imagen</th>
                        <th>Raza</th>
                        <th>Tamaño</th>
                        <th>Color de Pelo</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <tr v-for="perro in perros" :key="perro.id">
                            <td>{{perro.id}}</td>
                            <td>{{perro.image}}</td>
                            <td>{{perro.breed}}</td>
                            <td>{{perro.size}}</td>
                            <td>{{perro.haircolor}}</td>
                            <td>
                                <router-link :to='{name:editarPerro, params:{id:perro.id}}' class="btn btn-info">Editar</router-link>
                                <a type="button" @click="borrarPerro(perro.id)" class="btn  btn-danger">Borrar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"perros",
    data () {
        return{
            perros: []
        }  
    },
    mounted(){
        this.mostrarPerros()
    },
    methods:{
         async mostrarPerros(){
           await this.axios.get('/api/dogs').then(response=>{
                this.perros =response.data
            }).catch(error=>{
                this.perros =[]
            })
        },
        borrarPerro(id){
            if(confirm("¿Seguro que quieres borrar este dato?")){
                this.axios.delete('/api/dogs/' + id).then(response=>{
                    this.mostrarPerros()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>