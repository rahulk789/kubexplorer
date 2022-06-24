const options = [

    { value: 'Basic Commands (Beginner)', label: 'Basic Commands (Beginner)'      }   ,
    { value: 'Basic Commands (Intermediate)',    lable: 'Basic Commands (Intermediate)' },
    { value: 'Deploy Commands', lable: 'Deploy Commands'},
    { value: 'Cluster Management Commands', lable: 'Cluster Management Commands'},
    { value: 'Troubleshooting and Debugging Commands', lable: 'Troubleshooting and Debugging Commands'},
    { value: 'Advanced Commands', label: 'Advanced Commands'},
    { value: 'Settings Commands',label: 'Settings Commands'},
    { value: 'Other Commands', label: 'Other Commands'},
];

export const primaryOptions = options.sort((x, y) => {
    if (x.value < y.value) {
      return -1;
    }
    if (x.value > y.value) {
      return 1;
    }
    return 0;
  });
