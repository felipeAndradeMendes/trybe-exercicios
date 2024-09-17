import pytest
from codigo import is_odd, divide


def test_is_odd_when_number_is_odd_returns_true():
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    assert is_odd(4) is False


def test_divide_when_other_number_is_zero_raises_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
