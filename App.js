import React, {Component} from 'react';
import styles from "./style"
import {TouchableOpacity, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      count_result: 0,
      mark: "?"
    }
    //go reset!
    this.onReset = this.onReset.bind(this)
  }

  // simlar to onClick
  // if click plus, count + 1
  onCountChange(input){
    if (input == "plus"){
      this.setState({  mark: "+"  })
    } else if ((input["i"]) * 0 == 0)  {
        //どっちにいれるかチェック
        //配列からとりだしたからoblectの中に入っている
        //markが？ということは、左の入力が終わっていない
        if (this.state.mark == "?"){
          let num = Number(String(this.state.count) + String(input["i"]))
          this.setState({ count: num })
        } else {
          let num = Number(String(this.state.count2) + String(input["i"]))
          this.setState({ count2: num })
        } 
        //入力したのが「ー」だったら
    } else if (input == "minus") {
      this.setState({ mark: "-" })
    } else if (input == "times") {
      this.setState( { mark: "x"} )
    } else if (input == "divide") {
      this.setState({ mark: "➗"})
    }
  }

  onEqual(){
    if (this.state.mark == "+") {
      this.setState( {count_result: this.state.count + this.state.count2 })
    } else if (this.state.mark == "-") {
      this.setState( { count_result: this.state.count - this.state.count2})
    } else if (this.state.mark == "x") {
      this.setState( { count_result: this.state.count * this.state.count2})
    } else if (this.state.mark == "➗") {
      this.setState( { count_result: this.state.count / this.state.count2})
    }
  }

  onReset(){
    this.setState({ count: 0, count2:0, count_result:0, mark: "?" })
  }

  render() {
    return (
      <View>
        <View style={styles.countArea}>
          <Text style={styles.value}>{this.state.count}  {this.state.mark}  {this.state.count2}  =  {this.state.count_result}</Text>
        </View>

        <View style={styles.buttonArea}>
        {/* １−９のボタン作成 */}
            <View style={{flexDirection: 'row'}}>
              {array15.map(i => (
                  <TouchableOpacity style={styles.topbutton,[styles.buttonnum]} key={i} onPress={() => this.onCountChange({i})}>
                    <Text style={styles.buttonText}> {i} </Text>
                </TouchableOpacity>
              ))}
            </View>

        <View style={{ flexDirection: 'row'}}>
          {array610.map(i => (
              <TouchableOpacity style={styles.topbutton,[styles.buttonnum]} key={i} onPress={() => this.onCountChange({i})}>
                <Text style={styles.buttonText}> {i} </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: 'row'}}>
  {/* 足し算 */}
          <TouchableOpacity style={[styles.button, styles.buttonUpText]} onPress={() => this.onCountChange("plus")}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
  {/* 引算 */}
          <TouchableOpacity style={[styles.button, styles.buttonMinus]} onPress={() => this.onCountChange("minus")}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
  {/* 掛け算 */}
          <TouchableOpacity style={[styles.button, styles.buttonTimes]} onPress={() => this.onCountChange("times")}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
  {/* わりざん */}
          <TouchableOpacity style={[styles.button, styles.buttonDivide]} onPress={() => this.onCountChange("divide")}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
  {/* イコール */}
          <TouchableOpacity style={[styles.button, styles.buttonEqual]} onPress={() => this.onEqual("equal")}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
  {/* リセット */}
          <TouchableOpacity style={[styles.button, styles.buttonReset]} onPress={() => this.onReset()}>
            <Text style={[styles.buttonResetText]}>リセット</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


const array15 = [];
for (let i = 0; i< 5; i++) {
  array15[i] = i
}

const array610 = [];
for (let i = 5; i< 10; i++) {
  array610[i] = i
}
