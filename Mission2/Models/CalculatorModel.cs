using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class CalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Score must be between 0 and 100")]
        public float Assignments { get; set; }
        
        public float GroupProjects { get; set; }
        
        public float Quizzes { get; set; }
        
        public float Exams { get; set; }
        
        public float Intex { get; set; }
        
    }
}
