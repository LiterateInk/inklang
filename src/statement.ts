import type Expr from "./expression"
import { Token } from "./token"

export default abstract class Stmt {
  public static readonly Block = class Block extends Stmt {
    public constructor (
      public readonly statements: Array<Stmt>,
    ) { super() }
  }

  public static readonly Expression = class Expression extends Stmt {
    public constructor (
      public readonly expression: Expr,
    ) { super() }
  }

  public static readonly If = class If extends Stmt {
    public constructor (
      public readonly condition: Expr,
      public readonly thenBranch: Stmt,
      public readonly elseBranch: Stmt | null,
    ) { super() }
  }

  public static readonly Return = class Return extends Stmt {
    public constructor (
      public readonly keyword: Token,
      public readonly value: Expr
    ) { super() }
  }
}

export class Function extends Stmt {
  public constructor (
    public readonly name: Token,
    public readonly params: Array<FunctionParameter>,
    public readonly body: Array<Stmt>,
    public readonly returnType: Token,
    public readonly exposed: boolean
  ) { super() }
}

export class FunctionParameter extends Stmt {
  public constructor (
    public readonly name: Token,
    public readonly type: Token,
  ) { super() }
}

export class Variable extends Stmt {
  public constructor (
    public readonly name: Token,
    public readonly initializer: Expr | null
  ) { super() }
}
