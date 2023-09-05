using NUnit.Framework;
using MyNUnitApp;

namespace MyNUnitApp.Tests
{
    public class Tests
    {
        private Calculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new Calculator();
        }

        [Test]
        public void Add_TwoNumbers_ReturnsSum()
        {
            var result = calculator.Add(1, 2);

            Assert.AreEqual(3, result);
        }
    }
}
