
//const clientPromise = stitch.StitchClientFactory.create('analytics-pfmqy');
const transactionId = getTransactionId();
var stepCounter = getStepCounter();
var stepLocation = "";
switch (document.location.pathname) {
	case "/dop/tasksList.html":
		stepLocation = "Navigate to: Task List";
		break;
	case "/dop/guidedTaskModule.html":
		stepLocation = "Navigate to: Guided Task";
		break;
}
setStep(stepLocation);


function setStep(stepId) {
    console.log("a click occured on: " + stepId);

    if (stepId) {
        clientPromise.then(client => {
            const db = client.service('mongodb', 'mongodb-atlas').db('Analytics');
            client.login().then(() => {
                db.collection('Steps').insertOne({
                    stepId,
                    transactionId,
                    stepCounter,
                    timestamp: new Date().getTime(),
                    location: document.location.pathname
                }).then(function (result) {
                    console.log(result);
                });
                stepCounter = stepCounter + 1;
                sessionStorage["stepCounter"] = stepCounter;
            });
        });
    }
};

//.dop-select-dropdown, 

$(document).ready(function () {
    setTimeout(function () {
        $(".dop-filter").click(function (e) {
            setStep("Filter: " + e.currentTarget.className.split(" ")[1]);
        });
        $(".header-title").click(function (e) {
            setStep("Sort: " + e.target.className.split(" ")[1].split("-")[0]);
        });

        $(".dropdown-views").click(function (e) {
            setStep("Select save view");
        });

        $(".filter-manager, .tasks-queue-toggle, .column-manager-icon, .clear-all, .refreshTasksList, " +
            ".filter-panel-expander, .save-view-icon, .actionsColumn, .action-item, .checkboxColumn, .bulk-actions-menu").click(function (e) {
            setStep(e.currentTarget.className);
        });
        $('*[data-uxf-point="taskActionsButton"]').click(function (e) {
            setStep("GT taskActionsButton");
        });
        $('*[data-uxf-point="actionItemName_Release"], *[data-uxf-point="actionItemName_Assign"], *[data-uxf-point="actionItemName_Forward"], *[data-uxf-point="actionItemName_Jeopardy"], *[data-uxf-point="actionItemName_Delay"]').click(function (e) {
            setStep(e.target.attributes[0].value);
        });
        
    }, 10000);
});

clientPromise.then(client => {
    const db = client.service('mongodb', 'mongodb-atlas').db('Analytics');
    client.login().then(() =>
        db.collection('Steps').find().limit(200).execute()
    ).then(docs => {
        console.log(docs)
    }).catch(err => {
        console.error(err)
    });
});

function getTransactionId() {
    if (typeof(Storage)) {
        let transactionId = sessionStorage["transactionId"];
        if (!transactionId) {
            transactionId = new Date().getTime().toString();
            sessionStorage["transactionId"] = transactionId;
        }
        return transactionId;
    }
    return null;
};


function getStepCounter() {
    if (typeof(Storage)) {
        let stepCounter = parseInt(sessionStorage["stepCounter"]);
        if (!stepCounter) {
            stepCounter = 1;
            sessionStorage["stepCounter"] = stepCounter;
        }
        return stepCounter;
    }
    return null;
};
