
const url = import.meta.env.VITE_API_URL;

export function useUser(){
    const cadastarUser = async(data)=>{
        const req = await fetch(`${url}/usuario`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        });

        const res = await req.json();
        
        if(req.ok){
            localStorage.setItem('usuarioNome', res.nome_usuario);
            localStorage.setItem('usuarioId', res.id);
            alert("Usuário cadastrado com sucesso");
            location.reload();
        }
    }

    return {cadastarUser};
}

export function useTarefa(){
    const cadastrarTarefa = async(data)=>{
        const req = await fetch(`${url}/tarefa`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        });

        const res = await req.json();
        if(req.ok){
            const isStatusDefinido = await defineStatusPadrao(res.id);
            if(isStatusDefinido){
                alert("Tarefa cadastrada com sucesso");
                location.reload();
            }
        }
    }

    const defineStatusPadrao = async(id) =>{
        const status ={
            "status":"a fazer"
        } 
        const req = await fetch(`${url}/tarefa/${id}`,{
            method: "PATCH",
            body: JSON.stringify(status)
        });

        return req.ok
    }

    const atualizarStatus = async(id, novoStatus)=>{
        const status ={
            "status":novoStatus
        } 
        const req = await fetch(`${url}/tarefa/${id}`,{
            method: "PATCH",
            body: JSON.stringify(status)
        });

        if(req.ok){
            location.reload();
        }
    }

    const excluirTarefa = async(id)=>{
         const req = await fetch(`${url}/tarefa/${id}`,{
            method: "DELETE",
        });
        if(req.ok){
            alert('Tarefa excluída com sucesso')
            location.reload();
        }
    }

    return {cadastrarTarefa, atualizarStatus, excluirTarefa};
} 
