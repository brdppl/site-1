(function() {
    'use strict'

    const app = angular.module('myApp')

    app.controller("noticiaCtrl", function($scope, $http, $stateParams, $location, config) {
        const vm = this
    
        const url = $stateParams.url
        const shortname = 'pauamarelo-1'

        vm.link = $location.absUrl()
        
        function listar() {
            $http.get(config.noticias)
            .then(function(response) {
                vm.noticias = response.data.data
        
                vm.noticia = vm.noticias.filter(user => user.url === url)[0]

                vm.disqusConfig = {
                    disqus_shortname: shortname,
                    disqus_identifier: vm.noticia.url,
                    // disqus_url: 'http://clanpauamarelo.com/noticia/'+url
                    disqus_url: $location.absUrl()
                }
            })
        }
        listar()
    })
})()