'use strict';

/**
 * @ngdoc function
 * @name mdwConfApp.controller:ProgramCtrl
 * @description
 * # ProgramCtrl
 * Controller of the mdwConfApp
 */

angular.module('mdwConfApp')
  .controller('ProgramCtrl', function ($scope) {

    $scope.areas = [
      {
        "title": "Energy and Sustainability",
        "topics": "Novel, renewable and alternative energy systems, including fossil fuel power plants, co-generation, wind and solar generation, smart grid, fuel cell systems, bio based fuels, gasification processes, waste to energy processes; Life cycle analysis; Water recourse analysis."
      },
      {
        "title": "Safety and Environmental Engineering",
        "topics": "Process safety management; Occupational safety and health; Quantitative risk assessment; Environmental regulation and compliance; waste water management; solid waste management, air pollution control."
      },
      {
        "title": "Biochemical and Biomedical Engineering",
        "topics": "Biochemical process engineering; Tissue engineering and biomaterials; Pharmaceutical engineering and processes; Systems biology; Biosensors; Biophysics; Physiology."
      },
      {
        "title": "Process Engineering and Optimization",
        "topics": "Design and development of novel unit operations; Food and consumer product processing; Pilot plants and scale-up; Process optimization and control; Process operations management; Process modeling and simulation."
      },
      {
        "title": "Refining and Petrochemical Processing",
        "topics": "Distillation; Processing of unconventional oil and gas; Fouling and corrosion; Reliability, operability and troubleshooting; Novel testing technology, validation and qualification; Six sigma practices; Project management."
      },
      {
        "title": "Catalysis and Reaction Engineering",
        "topics": "Advances in reaction engineering and reactor analysis; Atomic layer deposition; Electro-catalysis; Catalytic processing of fuels and petrochemicals; Environmental catalysis; Polymer reaction engineering; Novel catalytic materials."
      },
      {
        "title": "Fluid Properties, Fluid Dynamics and Transport Phenomena",
        "topics": "Rheology; Micro-fluidics; Computational fluid dynamics; Fluidization and particulate processing; Heat transfer and separations technology; nanotechnology"
      },
      {
        "title": "ChE Education and Professional Development",
        "topics": "Technical tutorials; Resume review and mock interview workshops; career planning; Best practices in UG ChE education"
      }
    ];

    $scope.selectedArea = {
      topics: 'Choose a topic on the left',
      selected: false
    };

    $scope.selectArea = function (area) {
      $scope.selectedArea.selected = false;
      $scope.selectedArea = area;
      $scope.selectedArea.selected = true;
    };

  });