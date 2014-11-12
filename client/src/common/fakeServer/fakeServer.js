(function () {
    "use strict";

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
                        title: '1',
                        body: "больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.",
                        time: "2h 45m",
                        isRead: true,
                        tags: [
                            {
                                _id: "2",
                                name: "test"
                            },
                            {
                                _id: "3",
                                name: "test 23"
                            }
                        ]
                    },
                    {
                        _id: 3,
                        date_create: new Date(),
                        title: '2',
                        body: "больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.",
                        time: "2h 45m",
                        isRead: false,
                        tags: [
                            {
                                _id: "2",
                                name: "test"
                            }
                        ]
                    }
                ]
            });

            $httpBackend.when('GET', new RegExp('/feed/\\d{1,5}/posts/\\d{1,5}/\\d{1,5}')).respond(200, [
                {
                    _id: 45,
                    title: 'This is title',
                    body: "больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.больше не настаивая на господстве белой расы. В организацию с радостью примут и темнокожих людей, и евреев, и лиц нетрадиционной ориентации.",
                    time: "2h 45m",
                    isRead: true
                }
            ]);


            $httpBackend.when('POST', new RegExp('/post/tag/remove')).respond(200, {});
            $httpBackend.when('POST', new RegExp('/post/\\d{1,5}/markasread')).respond(200, {});
            $httpBackend.when('POST', new RegExp('/post/\\d{1,5}/markasunread')).respond(200, {});
            $httpBackend.when('POST', new RegExp('/post/\\d{1,5}/markasunread')).respond(200, {});
            $httpBackend.when('POST', new RegExp('/user/login')).respond(400, {
                error: "Cannot login"
            });

            $httpBackend.when('POST', new RegExp('/user/register')).respond(200, {
                message: "Please check you email"
            });
        }]);
})();
