const template = `
<li>
  addResult: {{ ctrl.addResult }} <-- should be 4
</li>
<li>
  substractResult: {{ ctrl.substractResult }} <-- should be 11
</li>
`;

const ShinyDirective = () => {
  return {
    scope: {},
    restrict: 'E',
    controller: 'shinyController',
    controllerAs: 'ctrl',
    bindToController: {
      addResult: '@'
    },
    template: template
  };
};

export default ShinyDirective;

ShinyDirective.$inject = []; // not necessary if empty
