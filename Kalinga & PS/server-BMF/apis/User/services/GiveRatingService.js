const Feedback = require('../../../DB/feedback.Schema');
const Product = require('../../../DB/Product.Schema')
const profileService = (payload, callback) => {

    Feedback.find({ $and: [{ Productid: payload.Productid }, { Userid: payload.Userid }] }, function (err1, doc) {
      
        if (err1) {
            callback(err1);
        }
        else {
         
            if (doc.length === 0) {
                let newFeedback = new Feedback()
                newFeedback.Productid = payload.Productid;
                newFeedback.Name = payload.Name;
                newFeedback.FeedbackText = payload.FeedbackText;
                newFeedback.Rating = payload.Rating;
                newFeedback.Userid = payload.Userid;
                newFeedback.save((err, docs) => {

                    if (err)
                        callback(err);
                    else {
      
                        
                        callback(null, docs);

                    }
                })

            }

            else {
                Feedback.findOneAndUpdate({ $and: [{ Productid: payload.Productid }, { Userid: payload.Userid }] },
                    { $set: { Rating: payload.Rating, FeedbackText: payload.FeedbackText } })

                    .then((data) => {
                        callback(null, data)
                    })
                    .catch((err) => {
                        callback(err);
                    })
            }

        }
    })


}
module.exports = profileService; 