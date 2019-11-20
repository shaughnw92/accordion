.accordion {
  margin-bottom: 4rem;
}

.accordion--header {
    border-bottom: 1px solid #7E7E7E;
    cursor: pointer;
    padding: 2rem 0;
}

.accordion--header:hover {
    background: #F6F7F9;
}

.accordion--header.accordion__active {
  font-weight: 700;
}
.accordion--content {
    display: none;
    border-bottom: 1px solid rgba(0,0,0,.025);
    background: rgba(0,0,0,.025);
    padding: 2rem 2rem 4rem;
}

.accordion--header::before {
    content: '';
    vertical-align: middle;
    display: inline-block;
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    background-color: #B1B5BE;
    margin-right: .75rem;
}

.accordion--header.accordion__active::before {
    background-color: #FC6468;
}
