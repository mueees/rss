angular.module('app')
    .run(['$httpBackend', function($httpBackend){
        $httpBackend.when('GET', '/category').respond(200, [
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
                        _id: "12"
                    }
                ]
            }
        ]);
        $httpBackend.when('GET', '/feed/12').respond(200, {
            _id: 12,
            name: "Habrahabr",
            posts: [
                {
                    _id: 2,
                    title: 'This is title',
                    description: "THis is desc"
                },
                {
                    _id: 3,
                    title: 'This is title 2',
                    description: "THis is desc 2"
                }
            ]
        });



    }]);