using System.ComponentModel.DataAnnotations;

namespace HackatonCCR.Models
{
    public class Place
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Value cant be empty")]
        [MinLength(3)]
        public string Name { get; set; }

        [MinLength(3)]
        public string Avatar { get; set; }

        [Required(ErrorMessage = "Value cant be empty")]
        public double Latitude { get; set; }

        [Required(ErrorMessage = "Value cant be empty")]
        public double Longitude { get; set; }

        [Required(ErrorMessage = "Value cant be empty")]
        public double LatitudeDelta { get; set; }

        [Required(ErrorMessage = "Value cant be empty")]
        public double LongitudeDelta { get; set; }

        public int Rating { get; set; }

        [Required(ErrorMessage = "Value cant be empty")]
        public double AveragePrice { get; set; }

        [Required(ErrorMessage = "Value cant be empty")]
        public string TypeOfService { get; set; }

        [Timestamp]
        public byte[] TStamp { get; set; }
    }
}
