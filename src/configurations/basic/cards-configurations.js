export const cardsConfiguration = {
    defaultView: {
        cardsOrder: ['echoCard'],
        cards: {
            echoCard: {
                lg: {w: 12, h: 4},
                md: {w: 12, h: 4,},
                sm: {w: 12, h: 4,},
            },
            counterCard: {
                lg: {w: 6, h: 2,},
                md: {w: 4, h: 2,},
                sm: {w: 2, h: 2,},
            },
            doubleCounterCard: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            titleDescriptionCard: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            actionsDescriptionCard: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            actionsWithTitleDescriptionCard: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            notAcard: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            iframeNoTitleNoActionsNoEvents: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            iframeWithActions: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            iframeWithTitleAndActions: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            iframeWithTitleAndActionsAndEvents: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
        }
    },
    customView: {
        cardsOrder: ['titleDescriptionCard', 'iframeWithTitleAndActionsAndEvents', 'actionsWithTitleDescriptionCard'],
        cards: {
            titleDescriptionCard: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            actionsWithTitleDescriptionCard: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
            iframeWithTitleAndActionsAndEvents: {
                lg: {w: 12, h: 2,},
                md: {w: 6, h: 2,},
                sm: {w: 4, h: 2,},
            },
        }
    },
    viewWithNoRealCard: {
        cardsOrder: ['titleDescriptionCard', 'counterCard', 'lironCard'],
        cards: {
            counterCard: {
                lg: {w:4, h:2,},
                md: {w:2, h:2,},
            },
            titleDescriptionCard: {
                lg: {w:8, h:2,},
                md: {w:2, h:2,},
            },
            lironCard: {
                lg: {w:8, h:2,},
            }
        },
    },
    viewWithoutCardsConfig: {
        cardsOrder: ['titleDescriptionCard', 'counterCard'],
    }
};