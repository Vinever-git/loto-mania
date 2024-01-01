<template>
    <div class="container" :style="{background: sorteioEscolhido.tema}">
      <section class="inputSelect">
        <select name="select" id="select" v-model="sorteios">
          <option value="Mega-sena" selected>Mega-sena</option>
          <option value="Quina">Quina</option>
          <option value="Lotofacil">Lotofácil</option>
          <option value="Lotomania">Lotomania</option>
          <option value="Timemania">Timemania</option>
          <option value="Timemania">Timemania</option>
          <option value="Dia-de-sorte">Dia de sorte</option>
        </select>
        <div class="titleLogo">
            <img src="../assets/Logo_Sena.png" width="59.29px" height="55.31px" alt="">
            <h1>{{ sorteios }}</h1>
        </div>
        <div class="InfomacaoAdd">
            <p>Concurso</p>
            <span>{{ sorteioEscolhido.numeroSorteio }} - {{ sorteioEscolhido.dataSorteio }}</span>
        </div>
      </section>
      <section class="containerDir" >
        <div class="numeros">
            <div class="numero"  v-for="(numero, index) in sorteioEscolhido.numeroSorteado" :key="index">
              <p>{{ numero }}</p>
            </div>
        </div>
        <div class="footer">
            <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
        </div>
      </section>
    </div>
  </template>
  <script>
  import { api } from '@/services';
    export default {
      data(){
        return {
          sorteios: "Mega-sena",
          sorteioEscolhido : "",
        }
      },
      methods: {
        fetchSorteios(){
            fetch(`./api/sorteios/${this.sorteios}/dados.json`)
                .then((response) => response.json())
                .then(json => {
                    this.sorteioEscolhido = json;
            })
        }
      },
      watch: {
        sorteios(){
            this.fetchSorteios()
        }
      },
      created() {
        this.fetchSorteios()
      }
    }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }
  .inputSelect {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
  }
  .inputSelect #select {
    margin: 50px 0 0 60px;
    border: none;
    width: 215.91px;
    height: 45.2px;
    border-radius: 4%;
  }

  .titleLogo {
    display: flex;
    align-items: center;
  }

  .titleLogo img {
    margin-left: 60px;
  }

  .titleLogo h1 {
    color: #fff;
    margin-top: 10px;
    margin-left: 15px;
    font-size: 30px;
  }

  .InfomacaoAdd {
    margin: 0 60px 50px;
    color: #fff;
  }
  .InfomacaoAdd p {
    font-size: 14px;
  }

  .InfomacaoAdd span {
    font-weight: 700;
    font-size: 20px;
  }
  .containerDir{
    margin-left: 10px;
    background: #dbd9d9;
    height: 100%;
    width: 80%;
    border-radius: 50% 0 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .numeros {
    display: flex;
    margin-left: 80px;
    
  }
  .numero{
    width: 111.2px;
    height: 106.36px;
    background: #fff;
    margin-left: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .numero p {
    font-size: 27px;
    font-weight: 700;
  }
.footer {
  position: relative;
  width: 100%;
}
.footer p {
  position: absolute;
  top: 190px;
  left: 34%;
}

  @media only screen and (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .inputSelect {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .inputSelect #select {
    width: 170.91px;
    height: 30.2px;
    margin: 0;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .titleLogo {
    flex-direction: column;
    align-items: center;
  }

  .titleLogo img {
    margin: 0;
    width: 49px;
    height: 45px;
  }
  .titleLogo h1 {
    margin: 0;
  }
  .InfomacaoAdd {
    margin: 0;
    display: flex;
  }

  .InfomacaoAdd span {
    font-weight: 300;
    font-size: 15px;
    margin-left: 2px;
  }

  .InfomacaoAdd p {
    font-weight: 300;
    font-size: 15px;
    margin-right: 2px;
  } 
  .containerDir {
    margin-top: 20px;
    width: 100%;
    border-radius: 50% 50% 0 0;
    padding: 40px;
  }
 .numeros {
  width: 100%;
  margin: 0;
  justify-content: center;
  flex-wrap: wrap;
  
 }
 .numero {
  width: 76px;
  height: 76px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
 }
 .numero p {
  font-size: 20px;
 }

 .footer {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
 }
 .footer p {
  font-size: 10px;
  top: 130px;
  left: 23%;
 }

}
  </style>
