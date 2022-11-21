let objDevInHouse= {
    plataforma: "DevInHouse",
    cursos: {
      dados: ["SQL"],
      backend: ["Java", "Spring"],
      frontend: ["Javascript", "React"]
  },
     objUser : {
      nome: ["Arthur"],
      idade:[16],
      cidade: ["Florianopolis"]
  }
  };
  objDevInHouse.objUser.nome[0]= "Arthur Ribeiro da Silva Melo Braga";
  objDevInHouse.objUser.idade[0]= "16";
  console.table(objDevInHouse)