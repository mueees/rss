angular.module('app')
    .run(['$httpBackend', function($httpBackend){
        var res = $httpBackend.when('GET', '/category');
        res.respond(200, [
            {
                name: "Web",
                feeds: [
                    {
                        name: 'Habrahabr.ru',
                        unread: '9',
                        _id: "1"
                    },
                    {
                        name: 'mue blog',
                        unread: '9',
                        _id: "2"
                    }
                ]
            },
            {
                name: "News",
                feeds: [
                    {
                        name: 'Portal news',
                        unread: '0',
                        _id: "3"
                    },
                    {
                        name: 'Custom name',
                        unread: '3',
                        _id: "4"
                    },
                    {
                        name: 'Portal news',
                        unread: '0',
                        _id: "5"
                    }
                ]
            }
        ]);
    }]);