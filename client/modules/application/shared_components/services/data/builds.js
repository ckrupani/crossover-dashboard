export default [{
    type: 'build',
    name: 'Tenrox-R1_1235',
    owner: '',
    time: '4/18/2014 10:00am',
    state: 'Pending',
    metrics: {
        percentComplete: 0,
        state: 'Pending'
    },
    build: {
        percentComplete: 0,
        state: 'Pending'
    },
    unitTest: {
        percentComplete: 0,
        state: 'Pending'
    },
    functionalTest: {
        percentComplete: 0,
        state: 'Pending'
    }
}, {
    type: 'firewall',
    name: '432462',
    owner: 'jtuck',
    time: '4/18/2014 12:12pm',
    state: 'Running',
    metrics: {
        percentComplete: 60,
        state: 'Running'
    },
    build: {
        percentComplete: 0,
        state: 'Pending'
    },
    unitTest: {
        percentComplete: 0,
        state: 'Pending'
    },
    functionalTest: {
        percentComplete: 0,
        state: 'Pending'
    }
}, {
    type: 'firewall',
    name: '432461',
    owner: 'samy',
    time: '4/18/2014 10:53am',
    state: 'Rejected',
    metrics: {
        percentComplete: 100,
        state: 'Rejected',
        test: {
            value: 64,
            increase: true,
            label: 'Test'
        },
        maintainability: {
            value: 53,
            increase: false,
            label: 'Maintainability'
        },
        security: {
            value: 64,
            label: 'Security'
        },
        workmanship: {
            value: 72,
            label: 'Workmanship'
        }
    },
    build: {
        percentComplete: 100,
        state: 'Accepted',
        time: '11:46am - 4/18/2014'
    },
    unitTest: {
        percentComplete: 100,
        state: 'Accepted',
        passed: 142,
        failed: 46,
        codeCoverage: 76
    },
    functionalTest: {
        percentComplete: 100,
        state: 'Accepted',
        passed: 56,
        failed: 280,
        codeCoverage: 45
    }
}, {
    type: 'build',
    name: 'Tenrox-R1_1234',
    owner: '',
    time: '4/16/2014 6:00am',
    state: 'Complete',
    metrics: {
        percentComplete: 100,
        state: 'Accepted',
        test: {
            value: 24,
            increase: true,
            label: 'Test'
        },
        maintainability: {
            value: 73,
            increase: false,
            label: 'Maintainability'
        },
        security: {
            value: 34,
            label: 'Security'
        },
        workmanship: {
            value: 52,
            label: 'Workmanship'
        }
    },
    build: {
        percentComplete: 100,
        state: 'Accepted',
        time: '7:00am - 4/16/2014'
    },
    unitTest: {
        percentComplete: 100,
        state: 'Accepted',
        passed: 175,
        failed: 67,
        codeCoverage: 25
    },
    functionalTest: {
        percentComplete: 100,
        state: 'Accepted',
        passed: 154,
        failed: 75,
        codeCoverage: 80
    }
}, {
    type: 'firewall',
    name: '432460',
    owner: 'samy',
    time: '4/17/2014 7:51am',
    state: 'Rejected',
    metrics: {
        percentComplete: 100,
        state: 'Rejected',
        test: {
            value: 84,
            increase: false,
            label: 'Test'
        },
        maintainability: {
            value: 33,
            increase: false,
            label: 'Maintainability'
        },
        security: {
            value: 74,
            label: 'Security'
        },
        workmanship: {
            value: 12,
            label: 'Workmanship'
        }
    },
    build: {
        percentComplete: 0,
        state: 'Pending'
    },
    unitTest: {
        percentComplete: 0,
        state: 'Pending'
    },
    functionalTest: {
        percentComplete: 0,
        state: 'Pending'
    }
}, {
    type: 'firewall',
    name: '432459',
    owner: 'samy',
    time: '4/16/2014 6:43am',
    state: 'Accepted',
    metrics: {
        percentComplete: 100,
        state: 'Accepted',
        test: {
            value: 34,
            increase: true,
            label: 'Test'
        },
        maintainability: {
            value: 83,
            increase: false,
            label: 'Maintainability'
        },
        security: {
            value: 36,
            label: 'Security'
        },
        workmanship: {
            value: 42,
            label: 'Workmanship'
        }
    },
    build: {
        percentComplete: 100,
        state: 'Accepted',
        time: '9:15am - 4/16/2014'
    },
    unitTest: {
        percentComplete: 100,
        state: 'Accepted',
        passed: 245,
        failed: 99,
        codeCoverage: 87
    },
    functionalTest: {
        percentComplete: 100,
        state: 'Accepted',
        passed: 54,
        failed: 199,
        codeCoverage: 25
    }
}, {
    type: 'build',
    name: 'Tenrox-R1_1233',
    owner: '',
    time: '4/16/2014 6:00am',
    state: 'Fail',
    metrics: {
        percentComplete: 100,
        state: 'Accepted',
        test: {
            value: 24,
            increase: true,
            label: 'Test'
        },
        maintainability: {
            value: 73,
            increase: false,
            label: 'Maintainability'
        },
        security: {
            value: 31,
            label: 'Security'
        },
        workmanship: {
            value: 52,
            label: 'Workmanship'
        }
    },
    build: {
        percentComplete: 50,
        state: 'Rejected',
        time: '7:00am - 4/16/2014'
    },
    unitTest: {
        percentComplete: 100,
        state: 'Accepted',
        passed: 175,
        failed: 67,
        codeCoverage: 25
    },
    functionalTest: {
        percentComplete: 100,
        state: 'Accepted',
        passed: 154,
        failed: 75,
        codeCoverage: 80
    }
}];