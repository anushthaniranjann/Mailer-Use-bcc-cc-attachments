const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {

    const mailer = require("@sendgrid/mail");

    mailer.setApiKey("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");

    mailer.send({


        personalizations: [{
            "to": [{
                name: "anushthaniranjan",
                "email": "anushthaniranjan@gmail.com"
            }],
            "cc": [{
                name: "shivangi81978",
                "email": "shivangi81978@gmail.com"
            }],
            "bcc": [{
                name: "2as1910100",
                "email": "2as1910100@gmail.com"
            }]
        }],
        from: "anushthaniranjan@gmail.com",
        subject: "Message from Anushtha",
        html: '<strong>Hello! </strong><p>Here’s an attachment for you!</p>',
        attachments: [{
            content: 'SGVsbG8sIFRoaXMgaXMgdGhlIEFQSSBmb3Igc2VuZGluZyBtYWlscyBmb3IgbXVsdGlwbGUgdXNlcnM=',
            filename: 'file.txt',
            type: 'plain/text',
            disposition: 'attachment',
            contentId: 'mytext'
        }, ],
    }).then(result => {
        console.log("Sent email");
    }, err => {
        console.error(err);
        console.log(err.response.body)
    });;

    res.end();
})


.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));