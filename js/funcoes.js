function minhaFuncao1() {
    
    $('.btn-danger').append('Novo nome');
    $('.btn-danger').css({
        color: '#00ff00',
        textTransform: 'uppercase',
        width: '70%',
    });
};

function minhaFuncao2(){
    $('#area-mensagens').empty();

    var alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3'];
    
    $.each(alunos, function(index,value) {
        $('#area-mensagens').append(value);
    });
}
